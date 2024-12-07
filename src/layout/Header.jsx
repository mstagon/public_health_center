import React from "react";
import { ReactComponent as BackArrow } from "../assets/backarrow.svg";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal.jsx";
import { useModal } from "../hooks/useModal";

const Header = ({ text, hideBackArrow }) => {
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/");
  };
  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

  return (
    <>
      <div className="flex items-center justify-between p-5">
        {!hideBackArrow && (
          <BackArrow className="size-20" onClick={handleBackPage} />
        )}
        <span className="text-5xl p-1 mx-auto font-bold text-center pl-6">
          {text}
        </span>
        <span
          className="bg-[#FCFCFC] text-xl px-5 py-3 border border-[#E2E2E2] rounded-full hover:drop-shadow-xl"
          onClick={handleOpenModal}
        >
          직원호출
        </span>
      </div>
      <Modal
        isOpen={isModalOpen}
        modalClose={handleCloseModal}
        text="직원을 호출했습니다."
      />
    </>
  );
};
export default Header;
