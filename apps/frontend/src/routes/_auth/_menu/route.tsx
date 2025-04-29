import { AppSidebar } from "@/components/app-sidebar";
import { Avatar } from "@/components/ui/avatar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useUser } from "@/hooks/useUser";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/_menu")({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useUser();
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-screen w-full flex flex-col p-2 space-y-2">
        <div className="flex justify-between items-center">
          <SidebarTrigger />
          <div className="flex items-center space-x-2">
            <Avatar className="bg-black flex justify-center items-center text-white">
              {user?.name?.slice(0, 2)}
            </Avatar>
          </div>
        </div>
        <div className="flex-1 h-0 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
