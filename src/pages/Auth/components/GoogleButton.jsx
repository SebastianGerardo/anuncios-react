// assets
import { GoogleIcon } from "@/assets/svg/GoogleIcon";

export const GoogleButton = () => (
  <button
    aria-label="Continue with google"
    role="button"
    className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
  >
    <GoogleIcon />
    <p className="text-base font-medium ml-4 text-gray-700">
      Continuar con Google
    </p>
  </button>
);
