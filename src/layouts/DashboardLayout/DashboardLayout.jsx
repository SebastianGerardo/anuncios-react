import { Outlet } from "react-router-dom";
// components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Toaster } from "sonner";

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-y-hidden bg-[#FFFAFA]">
      <Toaster position="top-center" richColors />
      <Sidebar />
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* <!-- Navbar --> */}
        <Header />
        <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-auto">
          <div className="max-w-[1320px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
