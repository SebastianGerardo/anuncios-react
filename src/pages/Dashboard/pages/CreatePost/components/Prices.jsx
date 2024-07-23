import { Button } from "@/components";
import { Section } from "@/components/general/Section";
import { Modal } from "@/components/general/Modal";
import { useModal } from "@/hooks/general/useModal";
import { useState } from "react";
import { ModalPrices } from "../modals/ModalPrices";

export const Prices = ({ formPosts }) => {
  const [price, setPrice] = useState({});

  const { prices } = formPosts.watch();

  const { isOpen, openModal, closeModal } = useModal({
    onOpen: (data) => setPrice(data),
    onClose: () => setPrice({}),
  });

  return (
    <Section title="Precios">
      <section className="flex flex-wrap items-center gap-2 pb-2">
        {prices &&
          prices.length > 0 &&
          prices.map((price) => (
            <div
              className="cursor-pointer transition-all duration-150 hover:bg-green-600 bg-green-500 px-2 py-1 text-white w-max rounded-lg"
              onClick={() => openModal(price)}
              key={price.id}
            >
              {price.price}
            </div>
          ))}
        <Button
          onClick={() => openModal({})}
          type="button"
          className="text-lg w-10 h-10 text-center !p-0 font-black"
        >
          +
        </Button>
      </section>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalPrices
          price={price}
          formPosts={formPosts}
          closeModal={closeModal}
        />
      </Modal>
    </Section>
  );
};
