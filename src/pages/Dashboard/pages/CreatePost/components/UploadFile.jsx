import { Section } from "@/components/general/Section";
import { InputFile } from "./InputFile";

export const UploadFile = ({ title, type, formPosts, name }) => {
  const { setValue, watch } = formPosts;

  const handleFiles = (newFiles) => {
    setValue(name, [...watch(name), ...newFiles]);
  };

  const deleteImage = (image) => {
    const newFiles = watch(name).filter((file) => file.name !== image.name);

    setValue(name, newFiles);
  };

  return (
    <Section title={title}>
      <div className="grid grid-cols-4 gap-6">
        {watch(name) &&
          watch(name)?.length > 0 &&
          watch(name).map((file, index) => (
            <div className="w-full" key={index}>
              {file.type.includes("video") ? (
                <video className="w-full h-[250px]" width="100" controls>
                  <source src={URL.createObjectURL(file)} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  onClick={() => deleteImage(file)}
                  className="w-full h-[250px]"
                  src={URL.createObjectURL(file)}
                  alt={`file-${index}`}
                />
              )}
            </div>
          ))}
        <InputFile files={watch(name)} handleFiles={handleFiles} type={type} />
      </div>
    </Section>
  );
};
