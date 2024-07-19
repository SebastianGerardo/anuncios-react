import { BtnAvatar } from "@/components";
import { BtnOpenMenu } from "./BtnOpenMenu";

export const Header = () => (
  <header className="flex-shrink-0 border-b py-2">
    <div className="flex items-center justify-between p-2">
      <BtnOpenMenu />
      <img
        width={200}
        height={36}
        src="/logo.png"
        alt="logo"
        className="h-9 hidden lg:block"
      />

      {/* <!-- Navbar left --> */}
      <div className="flex items-center space-x-3">
        <img
          width={200}
          height={36}
          src="/logo.png"
          alt="logo"
          className="h-9 lg:hidden"
        />
      </div>

      {/* <!-- Navbar right --> */}
      <BtnAvatar />
    </div>
  </header>
);
