import InputInformation from "../../components/InputInformation";
import { useOutletContext } from "react-router-dom";

import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
const CheckInTwoStep = () => {
  const { handleCloseModal, handleOpenModal, isModalOpen } = useModal();
  const { user } = useOutletContext();

  return (
    <>
      <InputInformation
        text="이름"
        field="name"
        label="다음"
        onNext={handleOpenModal}
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
        modalClose={handleCloseModal}
      />
    </>
  );
};
export default CheckInTwoStep;
