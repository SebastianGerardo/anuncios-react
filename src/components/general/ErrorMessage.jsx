export const ErrorMessage = ({ message }) => {
  return message && <p className="text-red-500 text-xs">{message}</p>;
};
