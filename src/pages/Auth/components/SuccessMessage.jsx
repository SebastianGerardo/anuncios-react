// assets
import { Success } from "@/assets/animated/Success/Success";

export const SuccessMessage = ({ message, subMessage }) => (
  <section className="flex flex-col justify-center items-center gap-2 text-center">
    <Success />
    <span className="mt-6">
      <h1 className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 mb-5">
        {message}
      </h1>
      {subMessage && (
        <h2 className="focus:outline-none text-sm font-medium leading-none text-gray-500">
          {subMessage}
        </h2>
      )}
    </span>
  </section>
);
