import InputInformation from "../../components/InputInformation";
import { useOutletContext } from "react-router-dom";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
const Inquiry = () => {
  const { user } = useOutletContext();
  const { handleCloseModal, handleOpenModal, isModalOpen } = useModal();
  const getVerification = () => {
    if (!user.phoneNumber) {
      return <div>등록된 휴대폰 번호가 없습니다.</div>;
    }
    return (
      <>
        예약내역 <br />
        <br />
        {user.name}님 <br />
        {user.appointmentDate}
      </>
    );
  };
  return (
    <div className="flex-grow">
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
        text={getVerification()}
      />
    </div>
  );
};
export default Inquiry;
