import { useState } from "react";

export const useModal = ({ onClose = () => {}, onOpen = () => {} } = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (data) => {
    onOpen(data);
    setIsOpen(true);
  };

  const closeModal = (data) => {
    onClose(data);
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
