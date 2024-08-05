import { useForm } from "react-hook-form";
// components
import { Button } from "@/components";
import { Section } from "@/components/general/Section";
import { UploadImage } from "./components/UploadImage";
import { UploadVideo } from "./components/UploadVideo";
import { BasicInformation } from "./components/BasicInformation";
import { TextArea } from "@/components/inputs/TextArea";
import { Schedules } from "./components/Schedules";
import { Prices } from "./components/Prices";
// templates
import { uploadFilesSequentially } from "./utils/uploadFilesSequentially";
import { createPost } from "@/apis/posts/apiPosts";
// utils
import { toast } from "sonner";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Locations } from "./components/Locations";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const navigate = useNavigate();
  const formPosts = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      videos: [],
      photos: [],
      schedules: [],
      prices: [],
      isCall: false,
      isWhatsapp: false,
      isTelegram: false,
      locations: {},
      isLoading: false,
    },
  });

  const { control, handleSubmit, watch, setValue } = formPosts;

  const uploadFiles = async ({
    locations: { department, province, district },
    isLoading,
    ...e
  }) => {
    setValue("isLoading", true);
    try {
      const responseImage = await uploadFilesSequentially("photos", e.photos);
      const responseVideo = await uploadFilesSequentially("videos", e.videos);

      createPost({
        ...e,
        location: `${department}${province}${district}`,
        photos: responseImage,
        videos: responseVideo,
      })
        .then(({ message }) => {
          if (message === "POST_CREATED") {
            toast.success("La publicación se ha creado exitósamente!");
            navigate("/dashboard/user/home", { state: { logged: true } });
          }
        })
        .catch(() =>
          toast.error("Ha ocurrido un error, vuelva a intentarlo más tarde")
        );
    } catch (error) {
      toast.error("Ha ocurrido un error, vuelva a intentarlo más tarde");
    } finally {
      setValue("isLoading", false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(uploadFiles)}
      className="grid grid-cols-1 lg:grid-cols-[70%_auto] gap-6"
    >
      <div className="flex flex-col gap-5">
        <BasicInformation control={control} />
        <Locations locations={watch("locations")} control={control} />
        <UploadImage formPosts={formPosts} />
        <UploadVideo formPosts={formPosts} />
        <Prices formPosts={formPosts} />
        <Schedules formPosts={formPosts} />
      </div>
      <div>
        <Section title="Presentación">
          <TextArea name="presentation" rows={10} control={control} />
        </Section>
        <Button disabled={watch("isLoading")} className="w-full mt-4">
          Crear publicación
        </Button>
      </div>
    </form>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Este campo es obligatorio"),
  age: Yup.number()
    .required("Este campo es obligatorio")
    .typeError("Ingrese un valor válido")
    .min(18, "La edad mínima es de 18 años")
    .max(65, "La edad máxima es de 65 años"),
  title: Yup.string().required("Este campo es obligatorio"),
  presentation: Yup.string().required("Este campo es obligatorio"),
  locations: Yup.object().shape({
    department: Yup.string().required("Este campo es obligatorio"),
    province: Yup.string().required("Este campo es obligatorio"),
    district: Yup.string().required("Este campo es obligatorio"),
  }),
  country: Yup.string().required("Este campo es obligatorio"),
  phone: Yup.string()
    .required("El teléfono es obligatorio")
    .test("inicia-con-nueve", "El teléfono debe comenzar con 9", (value) => {
      return value?.toString().startsWith("9");
    })
    .min(9, "El teléfono debe tener al menos 9 dígitos")
    .max(9, "Máximo 9 Caracteres"),
  isCall: Yup.boolean(),
  isWhatsapp: Yup.boolean(),
  isTelegram: Yup.boolean(),
  photos: Yup.array(),
  videos: Yup.array(),
  prices: Yup.array(),
  schedules: Yup.array(),
});
