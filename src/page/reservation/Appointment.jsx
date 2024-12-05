import Calendar from "react-calendar";
import "./Calendar.css";
import React, { useState } from "react";
import InputInformation from "../../components/InputInformation";
import Modal from "../../components/Modal";
import { useOutletContext } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Appointment = () => {
  const { user, updateUser } = useOutletContext();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const { handleCloseModal, handleOpenModal, isModalOpen } = useModal();

  const handleChangeDate = (selectedDate) => {
    setSelectedDate(selectedDate);
    updateUser({ appointmentDate: selectedDate.toISOString().split("T")[0] });
  };
  const handleChangeTime = (startDate) => {
    setStartDate(startDate);
    const formattedTime = startDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    updateUser({ reserveTime: formattedTime });
  };
  const combineDateTime = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const day = selectedDate.getDate();
    const hours = startDate.getHours();
    const minutes = startDate.getMinutes();
    const combinedDate = new Date(year, month, day, hours, minutes);
    const kstOffset = 9 * 60;
    const userOffset = combinedDate.getTimezoneOffset();
    const totalOffset = userOffset + kstOffset;
    const kstDate = new Date(combinedDate.getTime() + totalOffset * 60000);
    return kstDate.toISOString();
  };

  const handleReservation = async () => {
    const reservationDateTime = combineDateTime();
    try {
      await axios.post("http://180.65.58.182:8000/reservation", {
        name: user.name,
        phone: user.phoneNumber,
        reservation_time: reservationDateTime,
      });
      handleCloseModal();
    } catch (e) {
      console.error(e);
    }
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
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-lg font-semibold text-gray-800 mb-3">
              방문 시간
            </div>
            <div className="relative">
              <DatePicker
                selected={startDate}
                onChange={handleChangeTime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeFormat="HH:mm"
                dateFormat="HH:mm"
                timeCaption="시간"
                minTime={new Date().setHours(9, 0)}
                maxTime={new Date().setHours(18, 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
          </div>
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
            modalClose={handleReservation}
            text={
              <>
                {user.name}님 <br />
                {user.appointmentDate} {user.reserveTime}에 예약되었습니다.
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Appointment;
