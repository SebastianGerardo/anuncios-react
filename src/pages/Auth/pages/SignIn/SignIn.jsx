import { Link } from "react-router-dom";
// components
import { FormSignIn } from "@/pages/Auth/components/FormSignIn";
import { ReturnToHome } from "@/pages/Auth/components/ReturnToHome";
import { GoogleButton } from "@/pages/Auth/components/GoogleButton";

export function SignIn() {
  return (
    <>
      <ReturnToHome />
      <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
        ¡Inicia sesión en tu cuenta!
      </p>
      <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500 mb-6">
        ¿No tienes una cuenta?
        <Link
          to="/auth/sign_up"
          className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none mb-10 text-gray-800 cursor-pointer ml-1"
        >
          Regístrate aquí
        </Link>
      </p>
      <GoogleButton />
      <div className="w-full flex items-center justify-between py-5">
        <hr className="w-full bg-gray-400" />
        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
          Ó
        </p>
        <hr className="w-full bg-gray-400 " />
      </div>
      <FormSignIn />
    </>
  );
}
