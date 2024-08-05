// components
import { AuthButton } from "./AuthButton";
import { BtnFiltersMenu } from "./BtnFiltersMenu";
// assets
import logo from "@/assets/logo_title.png"

export const Navbar = () => {
  return (
    <section className="w-full bg-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4 ">
        <BtnFiltersMenu />
        <img src={logo} alt="logo" className="h-16" />
      </div>
      <AuthButton />
    </section>
  );
};
