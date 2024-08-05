// components
import { AsideSection } from "./components/AsideSection";
import { ImageSection } from "./components/ImageSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { Header } from "./components/Header";
// layouts
import { Section } from "./components/Section";
import { Schedule } from "./components/Schedule";
import { Prices } from "./components/Prices";
import { VideoSection } from "./components/VideoSection";

export function AnnouncementPublication({ data }) {
  return (
    <section className="text-black w-[60vw] h-[60vh]">
      <Header data={data} />
      <article className="grid grid-cols-1 lg:grid-cols-[70%_auto] gap-8 min-w-full">
        <div className="flex flex-col gap-6">
          <AboutMeSection data={data} />
          <ImageSection data={data} />
          <VideoSection data={data} />
          <Schedule data={data} />
          <Prices data={data} />
        </div>
        <AsideSection data={data} />
      </article>
    </section>
  );
}
