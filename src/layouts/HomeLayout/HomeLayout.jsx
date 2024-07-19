import { Outlet } from 'react-router-dom';
// components
import { Navbar } from './components/Navbar';

export const HomeLayout = () => {
  return (
    <section className="relative flex flex-col min-h-screen bg-[#dadedf]">
      <Navbar />
      <span className="block p-6">
        <Outlet />
      </span>
    </section>
  );
};
