import { GoogleButton } from "./GoogleButton";

export const HeaderForm = ({ label }) => (
  <>
    <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 mb-5">
      {label}
    </p>
    <GoogleButton />
    <div className="w-full flex items-center justify-between py-5">
      <hr className="w-full bg-gray-400" />
      <p className="text-base font-medium leading-4 px-2.5 text-gray-400">Ó</p>
      <hr className="w-full bg-gray-400 " />
    </div>
  </>
);
