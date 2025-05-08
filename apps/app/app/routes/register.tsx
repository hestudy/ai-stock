import { GalleryVerticalEnd } from "lucide-react";
import { redirect } from "react-router";
import { auth } from "~/auth";
import { RegisterForm } from "~/components/register-form";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const res = await auth.api.signUpEmail({
    body: {
      email: email as string,
      password: password as string,
      name: name as string,
    },
  });
  if (res?.user) {
    return redirect("/login");
  }
}

export default function Register() {
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
            <RegisterForm />
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
