import { toast } from "sonner";

export const validateImageWidth = (file) => {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(url);

      if (img.width >= 400) {
        resolve(true);
      } else {
        toast.error("El ancho de la imagen es menor a 400px");
        resolve(false);
      }

      resolve(img.width);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      toast.error("El ancho de la imagen es menor a 400px o es inválida");
      reject(new Error("Failed to load image"));
    };

    img.src = url;
  });
};
