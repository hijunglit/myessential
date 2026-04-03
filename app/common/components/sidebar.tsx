import AppSidebar from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function Sidebar() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger className="z-9" />
    </SidebarProvider>
  );
}
