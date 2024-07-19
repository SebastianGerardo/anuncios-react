import { Link } from "react-router-dom";
// assets
import { BackSquareIcon } from "@/assets/svg/BackSquareIcon";

export const SidebarHeader = () => {
  return (
    <div className="flex items-center justify-center flex-shrink-0 p-2 min-h-[72.5px]">
      <Link
        to="/"
        className="w-max mx-auto flex justify-center items-center p-2 space-x-2 rounded-full hover:bg-gray-100 text-[#D15454]"
      >
        <BackSquareIcon />
      </Link>
    </div>
  );
};
