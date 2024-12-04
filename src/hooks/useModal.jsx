import { useState } from "react";
export const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return { isModalOpen, handleOpenModal, handleCloseModal };
};
