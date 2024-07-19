import { Link } from "react-router-dom";
// components
import { Button } from "@/components";
import { Menu } from "./Menu";
// hooks
import { useClickOutside } from "@/hooks/general/useClickOutside";

export const BtnFiltersMenu = () => {
  const { dropdownRef, isOpen, setIsOpen } = useClickOutside();

  return (
    <div ref={dropdownRef}>
      <Button onClick={() => setIsOpen(true)}>
        hamburguer
        {/* <MenuRoundedIcon sx={{ color: "#fff" }} /> */}
      </Button>
      <Menu isOpen={isOpen}>
        <Link className="block lg:hidden" to="/auth/sign_in">
          <Button variant="black">Iniciar sesión</Button>
        </Link>
      </Menu>
    </div>
  );
};
