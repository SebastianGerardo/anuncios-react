// components
import { SidebarHeader } from "./SidebarHeader";
import { SidebarMain } from "./SidebarMain";
import { SidebarFooter } from "./SidebarFooter";
// hooks
import { useClickOutside } from "@/hooks/general/useClickOutside";
// stores
import { useUserStore } from "@/stores/user.store";

export const Sidebar = () => {
  const isSidebarOpen = useUserStore((state) => state.isSidebarOpen);
  const setSidebarClose = useUserStore((state) => state.setSidebarClose);

  const { dropdownRef } = useClickOutside({ action: setSidebarClose });

  return (
    <aside
      ref={dropdownRef}
      className={`fixed  ${
        isSidebarOpen ? "left-0" : "-left-20"
      } inset-y-0 z-10 flex flex-col flex-shrink-0 w-[5rem] max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none`}
    >
      <SidebarHeader />

      <SidebarMain />

      <SidebarFooter />
    </aside>
  );
};
