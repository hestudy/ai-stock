import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppForm } from "@/hooks/form";
import { pb } from "@/lib/pb";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const form = useAppForm({
    defaultValues: {
      email: "",
      emailVisibility: true,
      name: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async () => {
      await mutation.mutateAsync();
    },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await pb
        .collection("users")
        .create(form.state.values)
        .catch(() => {
          toast.error("注册失败");
          return null;
        });
      if (res?.token) {
        toast.success("注册成功");
        navigate({
          to: "/login",
          replace: true,
        });
      }
      return res;
    },
  });

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={"flex flex-col gap-6"}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">注册</CardTitle>
              <CardDescription>输入你的邮箱和密码注册你的账户</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  form.handleSubmit();
                }}
              >
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <form.AppField
                      name="name"
                      children={(field) => {
                        return (
                          <field.Input
                            required
                            label="昵称"
                            type="text"
                            placeholder="昵称"
                          />
                        );
                      }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <form.AppField
                      name="email"
                      validators={{
                        onChange: ({ value }) => {
                          if (
                            !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                              value
                            )
                          ) {
                            return "邮箱格式不正确";
                          }
                        },
                      }}
                      children={(field) => {
                        return (
                          <field.Input
                            label="邮箱"
                            type="email"
                            placeholder="m@example.com"
                          />
                        );
                      }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <form.AppField
                      name="password"
                      children={(field) => {
                        return (
                          <field.Input
                            required
                            label="密码"
                            type="password"
                            placeholder="********"
                          />
                        );
                      }}
                    />
                  </div>
                  <form.AppForm>
                    <form.Submit className="w-full">注册</form.Submit>
                  </form.AppForm>
                </div>
                <div className="mt-4 text-center text-sm">
                  已有账户？{" "}
                  <Link to="/login" className="underline underline-offset-4">
                    登录
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
