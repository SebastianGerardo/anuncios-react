import { Button } from "@/components";
import { Section } from "@/components/general/Section";
import { ModalSchedules } from "../modals/ModalSchedules";
import { Modal } from "@/components/general/Modal";
import { useModal } from "@/hooks/general/useModal";

export const Schedules = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Section title="Horarios">
      <Button
        onClick={openModal}
        type="button"
        className="text-lg w-10 h-10 text-center !p-0 font-black"
      >
        +
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalSchedules />
      </Modal>
    </Section>
  );
};
