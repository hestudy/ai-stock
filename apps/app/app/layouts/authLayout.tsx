import { Outlet, redirect } from "react-router";
import Spin from "~/components/spin";
import { pb } from "~/lib/pb";

export async function clientLoader() {
  const isAuth = pb.authStore.isValid;
  if (!isAuth) {
    return redirect("/login");
  }
  await pb.collection("users").authRefresh();
  return pb.authStore.record;
}

export function HydrateFallback() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spin />
    </div>
  );
}

export default function AuthLayout() {
  return <Outlet />;
}
