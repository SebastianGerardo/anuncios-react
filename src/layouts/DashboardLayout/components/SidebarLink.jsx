import { Link, useLocation } from "react-router-dom";
// assets
import { HomeIcon } from "@/assets/svg/HomeIcon";

export const SidebarLink = ({ href }) => {
  const { pathname } = useLocation();

  return (
    <li>
      <Link
        className="w-max mx-auto flex justify-center items-center p-2 space-x-2 rounded-md hover:bg-gray-100"
        to={href}
        state={{ logged: true  }}
      >
        <span
          className={`w-6 h-6 ${
            pathname == href ? "text-white" : "text-[#D15454]"
          } `}
        >
          <HomeIcon fill={pathname == href ? "#D15454" : "none"} />
        </span>
      </Link>
    </li>
  );
};
