// components
import { FormNewPassword } from "@/pages/Auth/components/FormNewPassword";

export function CreatePassword() {
  return (
    <div>
      <span className="">
        <h1 className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 mb-5">
          ¡Bienvenido!
        </h1>
        <h2 className="focus:outline-none text-sm font-medium leading-none text-gray-500">
          Aquí puedes crear tu nueva contraseña
        </h2>
        <hr className="w-full bg-gray-400 mt-5 mb-3" />
      </span>
      <FormNewPassword />
    </div>
  );
}
