import { useForm } from "react-hook-form";
// components
import { Button, Input } from "@/components";
import { Section } from "@/components/general/Section";
// templates
import { information } from "@/templates/AnnouncementPublication/components/AsideSection";
import { InputFile } from "./components/InputFile";
import { useState } from "react";
import { uploadImage } from "@/apis/files/apiFiles";
import { UploadFile } from "./components/UploadFile";
import { UploadImage } from "./components/UploadImage";
import { UploadVideo } from "./components/UploadVideo";
import { BasicInformation } from "./components/BasicInformation";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { TextArea } from "@/components/inputs/TextArea";
import { Schedules } from "./components/Schedules";
import { Prices } from "./components/Prices";

export const CreatePost = () => {
  const formPosts = useForm({
    defaultValues: {
      videos: [],
      photos: [],
    },
  });

  const { control } = formPosts;

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await uploadImage(formData);
      console.log(response);
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const uploadFilesSequentially = async (files) => {
    for (const file of files) {
      await uploadFile(file);
    }
  };

  const uploadFiles = async (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para subir los archivos al backend
    try {
      // await uploadFilesSequentially();

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <form onSubmit={uploadFiles} className="grid grid-cols-[70%_auto] gap-6">
      <div className="flex flex-col gap-5">
        <BasicInformation control={control} />
        <UploadImage formPosts={formPosts} />
        <UploadVideo formPosts={formPosts} />
        <Section title="Presentación">
          <TextArea name="presentation" rows={10} control={control} />
        </Section>
        <Prices />
        <Schedules />
      </div>
      <div>
        <AdditionalInfo />
        <Button className="w-full mt-4">Crear publicación</Button>
      </div>
    </form>
  );
};
