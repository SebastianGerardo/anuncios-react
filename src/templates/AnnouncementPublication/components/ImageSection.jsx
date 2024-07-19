// components
import { Section } from "./Section";

export const ImageSection = (props) => {
  return (
    <Section title="Fotos">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 ">
        {images.map((image, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

const images = [
  {
    src: "/prueba/1.jpg",
    alt: "1",
  },
  {
    src: "/prueba/2.jpg",
    alt: "2",
  },
  {
    src: "/prueba/3.jpg",
    alt: "3",
  },
  {
    src: "/prueba/4.jpg",
    alt: "4",
  },
];
