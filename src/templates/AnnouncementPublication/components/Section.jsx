// components
import { WhiteCard } from "@/components";
import { TitleSection } from "./TitleSection";

export const Section = ({ children, title }) => (
  <WhiteCard>
    <TitleSection title={title} />
    {children}
  </WhiteCard>
);
