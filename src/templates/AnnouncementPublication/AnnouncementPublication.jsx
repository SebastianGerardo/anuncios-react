// components
import { AsideSection } from "./components/AsideSection";
import { ImageSection } from "./components/ImageSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { Header } from "./components/Header";
// layouts
import { Section } from "./components/Section";

export function AnnouncementPublication(props) {
  return (
    <section className="text-black">
      <Header {...props} />
      <article className="grid grid-cols-1 lg:grid-cols-[70%_auto] gap-8 ">
        <div className="flex flex-col gap-6">
          <ImageSection {...props} />
          <Section title="Videos">---</Section>
          <AboutMeSection {...props} />
          <Section title="Servicios">---</Section>
        </div>
        <AsideSection {...props} />
      </article>
    </section>
  );
}
