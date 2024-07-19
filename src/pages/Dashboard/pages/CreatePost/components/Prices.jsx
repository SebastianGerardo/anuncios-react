// components
import { Section } from "@/components/general/Section";
import { Button } from "@/components";

export const Prices = () => {
  return (
    <Section title="Precios">
      <Button
        type="button"
        className="text-lg w-10 h-10 text-center !p-0 font-black"
      >
        +
      </Button>
    </Section>
  );
};
