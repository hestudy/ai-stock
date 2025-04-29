import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/_menu/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/_menu/"!</div>;
}
