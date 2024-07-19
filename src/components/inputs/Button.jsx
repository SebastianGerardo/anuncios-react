export const Button = ({ children, variant = "red", className, ...props }) => {
  return (
    <button
      className={`middle none center rounded-lg p-3 ${variants[variant]} font-sans text-xs font-bold uppercase 
      text-white shadow-md transition-all hover:shadow-lg 
      focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none 
      disabled:opacity-50 disabled:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const variants = {
  red: "bg-red-500 shadow-red-500/20 hover:shadow-red-500/40",
  black:
    "bg-[#212529] hover:bg-[#424649] duration-150 font-bold leading-4 tracking-wide !p-4",
};
