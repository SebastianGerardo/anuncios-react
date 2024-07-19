export const Menu = ({ isOpen, children }) => (
  <aside
    className={`fixed  ${
      isOpen ? "left-0" : "-left-60 lg:-left-[22rem]"
    } inset-y-0 z-30 p-2 flex flex-col flex-shrink-0 w-[15rem] lg:w-[22rem] max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:shadow-none`}
  >
    {children}
  </aside>
);
