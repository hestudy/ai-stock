import { pb } from "@/lib/pb";
import { useMemo } from "react";

export const useUser = () => {
  const user = useMemo(() => {
    return pb.authStore.record;
  }, []);

  return user;
};
