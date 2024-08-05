// components
import { Section } from "./Section";

export const VideoSection = ({ data }) => {
  return (
    <Section title="Videos">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data?.videos &&
          data?.videos.length > 0 &&
          data?.videos?.map((video, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <video className="w-full" width="100" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
      </div>
    </Section>
  );
};
