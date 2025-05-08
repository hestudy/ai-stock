import { useMemo } from "react";
import { pb } from "~/lib/pb";

export const useUser = () => {
  return useMemo(() => pb.authStore.record, []);
};
