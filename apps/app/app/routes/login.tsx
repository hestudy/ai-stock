import { GalleryVerticalEnd } from "lucide-react";

import { data, redirect } from "react-router";
import { auth } from "~/auth";
import { LoginForm } from "~/components/login-form";
import type { Route } from "./+types/login";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const res = await auth.api.signInEmail({
    body: {
      email: email as string,
      password: password as string,
    },
  });
  if (res.user) {
    const headers = new Headers();
    headers.set("Set-Cookie", res.token);
    return redirect("/", {
      headers,
    });
  }
  return res;
}

export default function LoginPage({ actionData }: Route.ComponentProps) {
  console.log(actionData);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            AI Stock
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        {/* <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
    </div>
  );
}
