import { ReactComponent as Receipt } from "../../assets/ receipt.svg";
import { ReactComponent as HealthProgram } from "../../assets/ healthprogram.svg";
import { ReactComponent as Acceptance } from "../../assets/ acceptance.svg";
import { ReactComponent as Byfloor } from "../../assets/byfloor.svg";
import { ReactComponent as Medicine } from "../../assets/medicine.svg";
import { ReactComponent as Reservation } from "../../assets/reservation.svg";
import CustomButton from "../../components/CustomButton";
const Home = () => {
  return (
    <>
      <div className="flex justify-center py-10 ">
        <CustomButton label="접수하기" icon={Receipt} />
        <CustomButton label="예약 및 조회" icon={Reservation} />
        <CustomButton
          label={
            <>
              최근 진료 및 <br />
              처방 약품 정보 조회
            </>
          }
          icon={Medicine}
        />
      </div>
      <div className="flex justify-center py-10">
        <CustomButton label="층별안내" icon={Byfloor} />
        <CustomButton label="건강 증진 프로그램" icon={HealthProgram} />
        <CustomButton label="수납" icon={Acceptance} />
      </div>
    </>
  );
};
export default Home;
