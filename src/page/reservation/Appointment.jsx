import Calendar from "react-calendar";
import "./Calendar.css";
import { useState } from "react";
import InputInformation from "../../components/InputInformation";
import Modal from "../../components/Modal";
import { useOutletContext } from "react-router-dom";
import { useModal } from "../../hooks/useModal";

const Appointment = () => {
  const { user, updateUser } = useOutletContext();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { handleCloseModal, handleOpenModal, isModalOpen } = useModal();
  const handleChangeDate = (selectedDate) => {
    setSelectedDate(selectedDate);
    updateUser({ appointmentDate: selectedDate.toLocaleDateString() });
  };
  return (
    <>
      <div className="flex ps-20 mt-5 ">
        <div className="flex-shrink-0">
          <Calendar
            onChange={handleChangeDate}
            date={selectedDate}
            field="appointmentDate"
            next2Label={null}
            prev2Label={null}
          />
        </div>

        <div className="flex-grow mt-10">
          <InputInformation
            text="휴대폰 번호"
            format="phone"
            field="phoneNumber"
            showButton={false}
            mtClass="mt-15"
          />
          <InputInformation
            text="이름"
            field="name"
            label="예약"
            mtClass="mt-20"
            onNext={handleOpenModal}
          />
          <Modal
            isOpen={isModalOpen}
            modalClose={handleCloseModal}
            text={
              <>
                {user.name}님 <br />
                {user.appointmentDate}에 예약되었습니다.
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Appointment;
