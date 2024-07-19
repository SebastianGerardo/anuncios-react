import { useController } from "react-hook-form";
import { ErrorMessage } from "@/components/general/ErrorMessage";

export const TextArea = ({ label, name, control, ...props }) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <label>
      {label && (
        <span className="text-sm font-medium leading-none text-gray-800">
          {label}
        </span>
      )}
      <textarea
        type="text"
        className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 resize-none"
        {...props}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <ErrorMessage message={error?.message} />
    </label>
  );
};
