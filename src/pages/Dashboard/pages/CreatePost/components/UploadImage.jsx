import { Section } from "@/components/general/Section";
import { InputFile } from "../wrappers/InputFile";
import { validateImageWidth } from "../utils/validateImageWidth";
import { deleteFile } from "../utils/deleteFile";

export const UploadImage = ({ formPosts }) => {
  const { setValue, watch } = formPosts;

  const files = watch("photos");

  const handleFiles = async (newFiles) => {
    const isValid = await validateImageWidth(newFiles[0]);

    if (isValid) {
      setValue("photos", [...files, { id: files.length + 1, file: newFiles }]);
    }
  };

  return (
    <Section title="Fotos">
      <div className="grid grid-cols-4 gap-6">
        {files &&
          files?.length > 0 &&
          files.map(({ file, id }) => (
            <div className="w-full" key={id}>
              <img
                onClick={() => setValue("photos", deleteFile(files, id))}
                className="w-full h-[250px] object-contain"
                src={URL.createObjectURL(...file)}
                alt={`file-${id}`}
              />
            </div>
          ))}
        {files.length < 4 && (
          <InputFile handleFiles={handleFiles} accept="image/*">
            <div className="flex-col min-w-full min-h-full h-[250px] border-[3px] border-dashed flex justify-center items-center text-center cursor-pointer">
              {/* <UploadIcon /> */}
              <p className="text-base font-medium mt-2">Subir imagen</p>
            </div>
          </InputFile>
        )}
      </div>
    </Section>
  );
};
