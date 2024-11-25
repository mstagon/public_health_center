import Calendar from "react-calendar";
import "./Calendar.css";
import { useState } from "react";
import InputInformation from "../../components/InputInformation";

const ReservationDetail = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="flex ps-20 mt-5 ">
        <div className="flex-shrink-0">
          <Calendar
            onChange={onChange}
            value={value}
            next2Label={null}
            prev2Label={null}
          />
        </div>

        <div className="flex-grow">
          <InputInformation
            text="휴대폰 번호"
            format="phone"
            showButton={false}
            mtClass=""
          />
          <InputInformation text="이름" showButton={false} mtClass="mt-10" />
          <InputInformation
            text="주민등록번호"
            format="idNumber"
            label="예약"
            mtClass="mt-10"
          />
        </div>
      </div>
    </>
  );
};

export default ReservationDetail;
