import { useUserStore } from "@/stores/user.store";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="bg-gradient-to-tl from-[#e21f7b] to-[#6d2c90] w-full h-screen flex flex-col md:justify-start justify-center items-center p-6">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-6xl  font-semibold text-white">LOGO</h1>
        <div className="bg-white shadow rounded xl:max-w-[30%] lg:w-1/3 md:w-1/2 w-full p-10 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
