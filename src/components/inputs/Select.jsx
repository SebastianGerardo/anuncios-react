import { useController } from "react-hook-form";
import { ErrorMessage } from "@/components/general/ErrorMessage";

export const Select = ({ label, name, control, options, ...props }) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <label>
      <span className="text-sm font-medium leading-none text-gray-800">
        {label}
      </span>
      <select
        type="text"
        className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
        {...props}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options &&
          options.length > 0 &&
          options.map(({ value, label }, index) => (
            <option key={index} value={value}>
              {label}
            </option>
          ))}
      </select>
      <ErrorMessage message={error?.message} />
    </label>
  );
};
