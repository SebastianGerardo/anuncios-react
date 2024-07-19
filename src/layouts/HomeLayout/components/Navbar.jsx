// components
import { AuthButton } from "./AuthButton";
import { BtnFiltersMenu } from "./BtnFiltersMenu";

export const Navbar = () => {
  return (
    <section className="w-full bg-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4 ">
        <BtnFiltersMenu />
        <img src="./logo.png" alt="logo" className="h-9" />
      </div>
      <AuthButton />
    </section>
  );
};
