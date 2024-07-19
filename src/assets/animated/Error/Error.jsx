import './error.css'

export const Error = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      className="checkmark-error"
      color="#EF4444"
    >
      <circle
        cx="26"
        cy="26"
        r="25"
        fill="none"
        className="checkmark__circle-error"
      ></circle>
      <path
        fill="none"
        d="M 12,12 L 40,40 M 40,12 L 12,40"
        className="checkmark__check"
      ></path>
    </svg>
  );
};
