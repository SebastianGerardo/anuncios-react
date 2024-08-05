// components
import { Section } from "./Section";

export const AboutMeSection = ({ data }) => {
  return (
    <Section title="Sobre mí">
      {/* <span className="font-bold text-base">
        Perú {`>`} Lima {`>`} Lince
      </span> */}
      <p className="text-sm mt-2">
        {data?.presentation ||
          `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nam
        veniam, consequatur eos facilis atque deserunt consequuntur itaque
        distinctio velit officia dicta doloremque. In ipsam laudantium aliquam?
        Laudantium, accusantium sapiente. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Illum nam veniam, consequatur eos facilis
        atque deserunt consequuntur itaque distinctio velit officia dicta
        doloremque. In ipsam laudantium aliquam? Laudantium, accusantium
        sapiente.`}
      </p>
    </Section>
  );
};
