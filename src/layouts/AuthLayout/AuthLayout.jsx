import { Outlet } from "react-router-dom";
import logo from '@/assets/logo.png'

export const AuthLayout = () => {
  return (
    <div className="bg-gradient-to-tl from-[#e21f7b] to-[#6d2c90] w-full h-screen flex flex-col md:justify-start justify-center items-center p-6">
      <div className="flex flex-col items-center justify-center w-full">
        <img src={logo} alt="" className="max-w-[15rem]" />
        <div className="bg-white shadow rounded xl:max-w-[30%] lg:w-1/3 md:w-1/2 w-full p-10 mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
