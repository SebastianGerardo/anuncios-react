// stores
import { useUserStore } from "@/stores/user.store";
// assets
import { MenuIcon } from "@/assets/svg/MenuIcon";

export const BtnOpenMenu = () => {
  const setSidebarOpen = useUserStore((state) => state.setSidebarOpen);
  
  return (
    <span onClick={setSidebarOpen} className="block lg:hidden cursor-pointer">
      <MenuIcon />
    </span>
  );
};
