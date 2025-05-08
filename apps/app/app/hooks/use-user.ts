import { authClient } from "~/lib/authClient";

export const useUser = () => {
  const session = authClient.useSession();

  return session.data?.user;
};
