// components
import { Link } from "react-router-dom";
import { BtnAvatar, Button } from "@/components";
// utils
import { getTokenUser } from "@/utils/getTokenUser";

export const AuthButton = () => {
  const token = getTokenUser();

  return (
    <div className="flex gap-3 items-center">
      {token ? (
        <BtnAvatar />
      ) : (
        <div className="flex gap-2 items-center">
          <Link to="/auth/sign_up" className="hidden lg:block">
            <Button variant="black">¡Regístrate aquí!</Button>
          </Link>
          <Link to="/auth/sign_in" className="hidden lg:block">
            <Button variant="black">Iniciar sesión</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
