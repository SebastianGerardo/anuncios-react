import { Section } from "./Section";

export const Prices = ({ data }) => {
  return (
    <Section title="Precios">
      {data.prices &&
        data.prices.length > 0 &&
        data.prices.map(({ id, price, typeTime, time }) => (
          <div
            className="cursor-pointer transition-all duration-150 hover:bg-green-600 bg-green-500 px-2 py-1 text-white w-max rounded-lg"
            key={id}
          >
            {time} {typeTime} - S/.{price}
          </div>
        ))}
    </Section>
  );
};
