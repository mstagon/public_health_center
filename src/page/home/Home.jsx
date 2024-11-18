import { ReactComponent as CheckIn } from "../../assets/checkin.svg";
import { ReactComponent as HealthProgram } from "../../assets/ healthprogram.svg";
import { ReactComponent as Acceptance } from "../../assets/ acceptance.svg";
import { ReactComponent as Byfloor } from "../../assets/byfloor.svg";
import { ReactComponent as Medicine } from "../../assets/medicine.svg";
import { ReactComponent as Reservation } from "../../assets/reservation.svg";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handlePageChange = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="flex justify-center py-10 ">
        <CustomButton
          label="접수하기"
          icon={CheckIn}
          onClick={() => handlePageChange("/checkIn")}
        />
        <CustomButton
          label="예약 및 조회"
          icon={Reservation}
          onClick={() => handlePageChange("/reservation")}
        />
        <CustomButton
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
        <CustomButton
          label="층별안내"
          icon={Byfloor}
          onClick={() => handlePageChange("/floorInformation")}
        />
        <CustomButton
          label="건강 증진 프로그램"
          icon={HealthProgram}
          onClick={() => handlePageChange("/healthProgram")}
        />
        <CustomButton
          label="수납"
          icon={Acceptance}
          onClick={() => handlePageChange("/acceptance")}
        />
      </div>
    </>
  );
};
export default Home;
