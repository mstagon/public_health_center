import React from "react";
import { ReactComponent as CheckIn } from "../../assets/checkin.svg";
import { ReactComponent as HealthProgram } from "../../assets/ healthprogram.svg";
import { ReactComponent as Acceptance } from "../../assets/ acceptance.svg";
import { ReactComponent as Byfloor } from "../../assets/byfloor.svg";
import { ReactComponent as Medicine } from "../../assets/medicine.svg";
import { ReactComponent as Reservation } from "../../assets/reservation.svg";
import CircleCustomButton from "../../components/CircleCustomButton";
import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from 'react-icons/io5';

const Home = () => {
  const navigate = useNavigate();
  const handlePageChange = (path) => {
    navigate(path);
  };

  return (
    <div className="relative min-h-screen">
      <button 
        onClick={() => handlePageChange('/settings')}
        className="absolute left-4 bottom-4 p-2 rounded-full hover:bg-gray-100"
      >
        <IoSettingsOutline className="w-6 h-6 text-gray-600" />
      </button>
      <div className="flex justify-center py-10 ">
        <CircleCustomButton
          label="접수하기"
          icon={CheckIn}
          onClick={() => handlePageChange("/checkIn")}
        />
        <CircleCustomButton
          label="예약 및 조회"
          icon={Reservation}
          onClick={() => handlePageChange("/reservation")}
        />
        <CircleCustomButton
          label={
            <>
              최근 진료 및 <br />
              처방 약품 정보 조회
            </>
          }
          icon={Medicine}
          onClick={() => handlePageChange("/consultation")}
        />
      </div>
      <div className="flex justify-center py-10">
        <CircleCustomButton
          label="층별안내"
          icon={Byfloor}
          onClick={() => handlePageChange("/floorInformation")}
        />
        <CircleCustomButton
          label="건강 증진 프로그램"
          icon={HealthProgram}
          onClick={() => handlePageChange("/healthProgram")}
        />
        <CircleCustomButton
          label="수납"
          icon={Acceptance}
          onClick={() => handlePageChange("/acceptance")}
        />
      </div>
    </div>
  );
};
export default Home;
