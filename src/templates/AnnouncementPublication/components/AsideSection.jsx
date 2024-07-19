// components
import { WhiteCard } from "@/components";
import { TitleSection } from "./TitleSection";

export const AsideSection = (props) => {
  return (
    <div className="h-max">
      <WhiteCard>
        <TitleSection title="Información" />
        <article className="text-sm">
          {information.map(({ label, value }, index) => (
            <div key={index} className="grid grid-cols-2 border-b border-gray-200 p-2">
              <p className="font-bold">{label}:</p>
              <p>{value}</p>
            </div>
          ))}
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
