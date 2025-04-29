import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
