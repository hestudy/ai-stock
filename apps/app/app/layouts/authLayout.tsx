import { Outlet, redirect, type LoaderFunctionArgs } from "react-router";
import { auth } from "~/auth";
import Spin from "~/components/spin";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  if (!session) {
    return redirect("/login");
  }
  return session;
}

export function HydrateFallback() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-background">
      <Spin />
    </div>
  );
}

export default function AuthLayout() {
  return <Outlet />;
}
