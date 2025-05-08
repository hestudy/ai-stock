import lodash from "lodash";
import type { ActionFunctionArgs } from "react-router";
import { auth } from "~/auth";
import db from "~/db";
import { initDataRecord, stocks } from "~/db/schema";
import { getTushareStockList } from "~/lib/tushare/getTushareStockList";

export async function action({ request }: ActionFunctionArgs) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  const res = await getTushareStockList();

  const data: (typeof stocks.$inferInsert)[] = [];

  res.data.items.forEach((item) => {
    const itemData: typeof stocks.$inferInsert = {
      name: "",
      symbol: "",
      ts_code: "",
      createUser: session!.user.id,
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
    createUser: session!.user.id,
  });
}
