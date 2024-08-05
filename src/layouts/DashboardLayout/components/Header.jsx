import { BtnAvatar } from "@/components";
import { BtnOpenMenu } from "./BtnOpenMenu";
import logo from "@/assets/logo_title.png"

export const Header = () => (
  <header className="flex-shrink-0 border-b py-2">
    <div className="flex items-center justify-between p-2">
      <BtnOpenMenu />
      <img src={logo} alt="logo" className="h-16" />

      {/* <!-- Navbar right --> */}
      <BtnAvatar />
    </div>
  </header>
);
