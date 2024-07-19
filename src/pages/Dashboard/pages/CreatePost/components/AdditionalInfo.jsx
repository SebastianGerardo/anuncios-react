import { Section } from "@/components/general/Section";
import { information } from "@/templates/AnnouncementPublication/components/AsideSection";

export const AdditionalInfo = () => {
  return (
    <Section title="Información">
      <article className="text-sm h-max">
        {information.map(({ label, value }, index) => (
          <div
            key={index}
            className="grid grid-cols-2 border-b border-gray-200 p-2"
          >
            <p className="font-bold">{label}:</p>
            <p>{value}</p>
          </div>
        ))}
      </article>
    </Section>
  );
};
