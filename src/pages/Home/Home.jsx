// components
import { UsersCards } from "./components/UsersCards";

export const Home = () => {
  return (
    <section>
      <div className="flex items-center mb-1 text-black">
        <h1 className="text-xl font-semibold">Destacadas</h1>
        {/* <StarRoundedIcon /> */}
      </div>
      <UsersCards />
    </section>
  );
};
