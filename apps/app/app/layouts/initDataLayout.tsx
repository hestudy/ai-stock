import { Outlet } from "react-router";
import { pb } from "~/lib/pb";
import type { Route } from "./+types/initDataLayout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { useState } from "react";

export async function clientLoader() {
  return await pb.collection("initDataRecord").getList(1, 1, {
    filter: "name='stocks'",
  });
}

export default function initDataLayout({ loaderData }: Route.ComponentProps) {
  const [open, setOpen] = useState(loaderData.items.length === 0);

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
        </DialogContent>
      </Dialog>
      <Outlet />
    </>
  );
}
