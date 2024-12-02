import InputInformation from "../../components/InputInformation";
import { useOutletContext } from "react-router-dom";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import React, { useState } from "react";

const Inquiry = () => {
  const { user } = useOutletContext();
  const { handleCloseModal, handleOpenModal, isModalOpen } = useModal();
  const [inquiryNumber, setInquiryNumber] = useState("");

  const getVerification = () => {
    if (!inquiryNumber) {
      return <div>등록된 휴대폰 번호가 없습니다.</div>;
    }

    if (user.phoneNumber === inquiryNumber) {
      return (
        <>
          예약내역 <br />
          <br />
          {user.name}님 <br />
          {user.appointmentDate}
        </>
      );
    }

    return <div>예약 내역이 없습니다.</div>;
  };

  return (
    <div className="flex-grow">
      <InputInformation
        text="휴대폰 번호"
        format="phone"
        field="phoneNumber"
        label="조회"
        onNext={handleOpenModal}
        value={inquiryNumber}
        onChange={setInquiryNumber}
        skipContextUpdate
      />
      <Modal
        isOpen={isModalOpen}
        modalClose={handleCloseModal}
        text={getVerification()}
      />
    </div>
  );
};

export default Inquiry;
