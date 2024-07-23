import { Button } from "@/components";
import { Section } from "@/components/general/Section";
import { ModalSchedules } from "../modals/ModalSchedules";
import { Modal } from "@/components/general/Modal";
import { useModal } from "@/hooks/general/useModal";
import { useState } from "react";
import { optionsDays } from "@/helpers/optionsDays";

export const Schedules = ({ formPosts }) => {
  const [schedule, setSchedule] = useState([]);

  const { schedules } = formPosts.watch();
  
  const { isOpen, openModal, closeModal } = useModal({
    onOpen: ({ end, start, day }) =>
      setSchedule({ end, start, day, isEdit: day ? true : false }),
    onClose: () => setSchedule({}),
  });

  return (
    <Section title="Horarios">
      <section className="flex flex-wrap items-center gap-2 pb-2">
        {schedules && schedules.length > 0 && schedules.map((schedule) => (
          <div
            className="cursor-pointer transition-all duration-150 hover:bg-green-600 bg-green-500 px-2 py-1 text-white w-max rounded-lg"
            onClick={() => openModal(schedule)}
            key={schedule.day}
          >
            {optionsDays[schedule.day].label} - {schedule.start} -{" "}
            {schedule.end}
          </div>
        ))}
        <Button
          onClick={openModal}
          type="button"
          className="text-lg w-10 h-10 text-center !p-0 font-black"
        >
          +
        </Button>
      </section>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalSchedules
          schedule={schedule}
          formPosts={formPosts}
          closeModal={closeModal}
        />
      </Modal>
    </Section>
  );
};
