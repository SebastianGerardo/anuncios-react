import { Section } from "@/components/general/Section";
import { InputFile } from "../wrappers/InputFile";
import { deleteFile } from "../utils/deleteFile";
import { toast } from "sonner";
import { validateVideoDuration } from "../utils/validateVideoDuration";

export const UploadVideo = ({ formPosts }) => {
  const { setValue, watch } = formPosts;

  const files = watch("videos");

  const handleFiles = async (newFiles) => {
    const isValid = await validateVideoDuration(newFiles[0]);

    if (isValid) {
      setValue("videos", [...files, { id: files.length + 1, file: newFiles }]);
    }
  };

  return (
    <Section title="Videos">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {files &&
          files?.length > 0 &&
          files.map(({ file, id }) => (
            <div className="w-full relative" key={id}>
              <button
                type="button"
                onClick={() => setValue("videos", deleteFile(files, id))}
                className="cursor-pointer z-[999] absolute text-red-500 border rounded-full w-5 h-5 flex justify-center items-center p-2 border-red-500 bg-white right-0 m-3"
              >
                X
              </button>
              <video className="w-full" width="100" controls>
                <source src={URL.createObjectURL(...file)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        {files.length < 4 && (
          <InputFile handleFiles={handleFiles} accept="video/*">
            <div className="flex-col min-w-full min-h-[160px] border-[3px] border-dashed flex justify-center items-center text-center cursor-pointer">
              {/* <UploadIcon /> */}
              <p className="text-base font-medium mt-2">Subir video</p>
            </div>
          </InputFile>
        )}
      </div>
    </Section>
  );
};
