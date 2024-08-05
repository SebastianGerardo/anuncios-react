// components
import { WhiteCard } from "@/components";
import { TitleSection } from "./TitleSection";

export const AsideSection = ({ data }) => {
  const { country, phone } = data;

  return (
    <div className="h-max">
      <WhiteCard>
        <TitleSection title="Información" />
        <article className="text-sm">
          {country && (
            <div className="grid grid-cols-2 capitalize border-b border-gray-200 p-2">
              <p className="font-bold">Nacionalidad:</p>
              <p>{country}</p>
            </div>
          )}
          {phone && (
            <div className="grid grid-cols-2 border-b border-gray-200 p-2">
              <p className="font-bold">Teléfono:</p>
              <p>{phone}</p>
            </div>
          )}
        </article>
      </WhiteCard>
    </div>
  );
};

export const information = [
  {
    label: "Nacionalidad",
    value: "Venezolana",
  },
  {
    label: "Etnia",
    value: "Latina",
  },
  {
    label: "Edad",
    value: "22",
  },
  {
    label: "Cabello (Color - Tamaño)",
    value: "Negro - Mediano",
  },
  {
    label: "Ojos",
    value: "Negros",
  },
  {
    label: "Tipo de senos",
    value: "Naturales",
  },
  {
    label: "Servicios a",
    value: "Hombres y mujeres",
  },
  {
    label: "Disponible para",
    value: "Hoteles y departamentos",
  },
  {
    label: "Fuma",
    value: "Sí",
  },
  {
    label: "Orientación sexual",
    value: "Heterosexual",
  },
];
