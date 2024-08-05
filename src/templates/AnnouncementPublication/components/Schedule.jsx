import { optionsDays } from "@/helpers/optionsDays";
import { Section } from "./Section";

export const Schedule = ({ data }) => {
  return (
    <Section title="Horarios">
      {data.schedules &&
        data.schedules.length > 0 &&
        data.schedules.map(({ day, start, end }) => (
          <div
            className="cursor-pointer transition-all duration-150 hover:bg-green-600 bg-green-500 px-2 py-1 text-white w-max rounded-lg"
            key={day}
          >
            {optionsDays[day].label} - {start} - {end}
          </div>
        ))}
    </Section>
  );
};
