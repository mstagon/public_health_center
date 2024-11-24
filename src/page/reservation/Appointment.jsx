import Calendar from "react-calendar";
import "./Calendar.css";
import { useState } from "react";
import NextButton from "../../components/NextButton";
import CheckInOneStep from "../checkin/CheckInOneStep";

const Appointment = () => {
  const [value, onChange] = useState(new Date());
  const [currentPage, setCurrentPage] = useState("calendar");
  const handleNextPage = () => {
    setCurrentPage("checkInOneStep");
  };
  return (
    <>
      {currentPage === "calendar" && (
        <div className="flex flex-col items-center gap-10">
          <Calendar
            onChange={onChange}
            value={value}
            next2Label={null}
            prev2Label={null}
          />
          <NextButton onClick={handleNextPage} />
        </div>
      )}
      {currentPage === "checkInOneStep" && <CheckInOneStep />}
    </>
  );
};

export default Appointment;
