export const Card = ({ data, image, alt, onClick }) => {
  const { title, name, photos } = data
  return (
    <section
      onClick={onClick}
      className="relative w-full overflow-hidden mb-3 cursor-pointer"
    >
      <div className="absolute inset-0 bg-center rounded-xl bg-black"></div>
      <div className="group relative m-0 flex h-full w-full rounded-xl ring-gray-900/5 sm:mx-auto">
        <div className=" z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
          <img
            src={
              photos[0] ||
              "https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
            }
            className="animate-fade-in block h-full w-full scale-100 rounded-xl transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt={alt}
          />
        </div>
        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <h1 className="capitalize font-serif text-2xl font-bold text-white shadow-xl">
            {name}
          </h1>
          <h1 className="text-sm font-light text-gray-200 shadow-xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};
