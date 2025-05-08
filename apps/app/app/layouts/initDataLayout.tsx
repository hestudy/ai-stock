import { eq } from "drizzle-orm";
import { useState } from "react";
import { Outlet } from "react-router";
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

export async function action() {}

export default function initDataLayout({ loaderData }: Route.ComponentProps) {
  const [open] = useState(loaderData === 0);

  return (
    <>
      <Dialog open={open}>
        <DialogContent hideClose>
          <DialogHeader>
            <DialogTitle>Init Stocks Data</DialogTitle>
            <DialogDescription>
              This will initialize the stocks data for the application.
            </DialogDescription>
          </DialogHeader>
          <Button className="block">click me start init data</Button>
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
}
