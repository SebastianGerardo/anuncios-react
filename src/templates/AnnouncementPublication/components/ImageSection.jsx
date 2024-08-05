// components
import { Section } from "./Section";

export const ImageSection = ({ data }) => {
  return (
    <Section title="Fotos">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 ">
        {data?.photos && data?.photos.length > 0 && data?.photos?.map((image, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img
              src={image}
              alt={image}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
