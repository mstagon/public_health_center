import InputInformation from "../../components/InputInformation";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";

const CheckInTwoStep = () => {
  const { handleCloseModal, handleOpenModal, isModalOpen } = useModal();
  const { user } = useOutletContext();

  const handleCheckIn = async () => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const today = new Date(Date.now() - offset);
    try {
      await axios.post("http://180.65.58.182:8000/checkin", {
        name: user.name,
        phone: user.phoneNumber,
        check_in_time: today.toISOString(),
      });
      handleCloseModal();
    } catch (e) {
      console.error(e);
    }
  };

  const handleNext = () => {
    handleOpenModal();
  };

  return (
    <>
      <InputInformation
        text="이름"
        field="name"
        label="다음"
        onNext={handleNext}
      />
      <Modal
        isOpen={isModalOpen}
        text={
          <>
            {user.name}님 <br />
            {user.phoneNumber}
            접수되었습니다.
          </>
        }
        modalClose={handleCheckIn}
      />
    </>
  );
};

export default CheckInTwoStep;
