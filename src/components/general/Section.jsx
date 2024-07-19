// components
import { WhiteCard } from "@/components";

export const Section = ({ children, title }) => (
  <WhiteCard>
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    {children}
  </WhiteCard>
);
