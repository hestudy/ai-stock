import { eq } from "drizzle-orm";
import lodash from "lodash";
import { Outlet } from "react-router";
import Loading from "~/components/loading";
import db from "~/db";
import { initDataRecord, stocks } from "~/db/schema";
import { getTushareStockList } from "~/lib/tushare/getTushareStockList";
import type { Route } from "./+types/initDataLayout";

export async function loader() {
  const count = await db.$count(
    initDataRecord,
    eq(initDataRecord.name, "stocks")
  );
  if (count === 0) {
    const res = await getTushareStockList();

    const data: (typeof stocks.$inferInsert)[] = [];

    res.data.items.forEach((item) => {
      const itemData: typeof stocks.$inferInsert = {
        name: "",
        symbol: "",
        ts_code: "",
      };
      res.data.fields.forEach((field, index) => {
        // @ts-ignore
        itemData[field] = item[index];
      });
      data.push(itemData);
    });

    if (!lodash.isEmpty(data)) {
      const result = await db.select().from(stocks);
      const difference = lodash.differenceBy(data, result, "symbol");
      if (!lodash.isEmpty(difference)) {
        const chunkArray = lodash.chunk(difference, 100);
        for (const c of chunkArray) {
          await db.insert(stocks).values(c);
        }
      }
    }

    await db.insert(initDataRecord).values({
      name: "stocks",
    });
  }
}

export function HydrateFallback() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <Loading />
      <p className="text-sm text-muted-foreground">initializing data...</p>
    </div>
  );
}

export default function initDataLayout({}: Route.ComponentProps) {
  return <Outlet />;
}
