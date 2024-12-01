import InputInformation from "../../components/InputInformation";
import { useOutletContext } from "react-router-dom";
import Modal from "../../components/Modal";
import React from "react";
import { useModal } from "../../hooks/useModal";
const Acceptance = () => {
  const { handleCloseModal, handleOpenModal, isModalOpen } = useModal();
  const { user } = useOutletContext();
  const getAcceptance = () => {
    if (user.phoneNumber === "010-1234-5678") {
      return <div>수납 완료</div>;
    }
  };

  return (
    <div>
      <InputInformation
        text="휴대폰 번호"
        format="phone"
        field="phoneNumber"
        label="조회"
        onNext={handleOpenModal}
      />
      <Modal
        isOpen={isModalOpen}
        modalClose={handleCloseModal}
        text={getAcceptance()}
      />
    </div>
  );
};
export default Acceptance;
