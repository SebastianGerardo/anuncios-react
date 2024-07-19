import { useState } from "react";

export const InputFile = ({ handleFiles, children, ...props }) => {
  const [fileSelected, setFileSelected] = useState(false)
  const handleFileChange = (event) => {
    setFileSelected(!fileSelected)
    const files = Array.from(event.target.files);

    handleFiles(files);
  };

  return (
    <label>
      {children}
      <input
        style={{ display: "none" }}
        type="file"
        // multiple
        onChange={handleFileChange}
        key={fileSelected ? "unmounted" : "mounted"}
        {...props}
      />
    </label>
  );
};
