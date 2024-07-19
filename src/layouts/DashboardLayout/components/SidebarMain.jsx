import { SidebarLink } from "./SidebarLink";

export const SidebarMain = () => {
  return (
    <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
      <ul className="p-2 overflow-hidden">
        <SidebarLink href="/dashboard/user/home" />
      </ul>
    </nav>
  );
};
