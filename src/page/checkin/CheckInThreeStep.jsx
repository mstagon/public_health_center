import InputInformation from "../../components/InputInformation";
import { useState } from "react";
const CheckInThreeStep = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <InputInformation
        text="주민등록번호"
        label="예약"
        format="idNumber"
        onNext={handleOpenModal}
      />
      {isModalOpen && (
        <div>
          <h3>예약되었습니다</h3>
          <button onClick={handleCloseModal}>닫기</button>
        </div>
      )}
    </>
  );
};
export default CheckInThreeStep;
