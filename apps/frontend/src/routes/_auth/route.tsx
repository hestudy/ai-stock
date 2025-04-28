import { pb } from "@/lib/pb";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const valid = pb.authStore.isValid;
      if (!valid) {
        pb.authStore.clear();
        navigate({
          to: "/login",
          replace: true,
        });
      }

      await pb
        .collection("users")
        .authRefresh()
        .catch(() => {
          pb.authStore.clear();
          navigate({
            to: "/login",
            replace: true,
          });
        });

      return valid;
    },
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error</div>;
  }

  return <Outlet />;
}
