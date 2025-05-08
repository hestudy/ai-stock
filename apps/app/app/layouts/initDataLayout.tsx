import { eq } from "drizzle-orm";
import { Outlet, useFetcher } from "react-router";
import Spin from "~/components/spin";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import db from "~/db";
import { initDataRecord } from "~/db/schema";
import type { Route } from "./+types/initDataLayout";

export async function loader() {
  return await db.$count(initDataRecord, eq(initDataRecord.name, "stocks"));
}

export default function initDataLayout({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  return (
    <>
      <Dialog open={loaderData === 0}>
        <DialogContent hideClose>
          <DialogHeader>
            <DialogTitle>Init Stocks Data</DialogTitle>
            <DialogDescription>
              This will initialize the stocks data for the application.
            </DialogDescription>
          </DialogHeader>
          <fetcher.Form method="post" action="/api/initData">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Spin />}
              click me start init data
            </Button>
          </fetcher.Form>
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
}
