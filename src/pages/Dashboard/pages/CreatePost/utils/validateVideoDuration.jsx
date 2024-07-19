import { toast } from "sonner";

export const validateVideoDuration = (file) => {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const video = document.createElement("video");

    video.preload = "metadata";
    video.onloadedmetadata = () => {
      URL.revokeObjectURL(url);

      if (video.duration > 60) {
        toast.error("El video debe durar máximo 1 minuto");
        resolve(false);
      } else {
        resolve(true);
      }
    };

    video.onerror = () => {
      URL.revokeObjectURL(url);
      toast.error("El video debe durar máximo 1 minuto o es inválido");
      reject(new Error("Failed to load video"));
    };

    video.src = url;
  });
};
