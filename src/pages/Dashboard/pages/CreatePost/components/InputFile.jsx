export const InputFile = ({ files, handleFiles, type }) => {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    handleFiles(files);
  };

  return (
    files.length < 4 && (
      <div className={`flex items-center justify-center`}>
        <label
          // htmlFor="inputFile"
          className="flex-col min-w-full min-h-full h-[250px] border-[3px] border-dashed flex justify-center items-center text-center cursor-pointer"
        >
          {/* <UploadIcon /> */}
          <p className="text-base font-medium mt-2">Subir archivo</p>
          <input
            // id="inputFile"
            style={{ display: "none" }}
            type="file"
            accept={`${type || "image"}/*`}
            multiple
            onChange={handleFileChange}
          />
        </label>
      </div>
    )
  );
};
