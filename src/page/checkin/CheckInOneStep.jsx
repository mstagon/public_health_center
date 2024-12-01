import InputInformation from "../../components/InputInformation";
import { useNavigate } from "react-router-dom";

const CheckInOneStep = () => {
  const navigate = useNavigate();
  return (
    <InputInformation
      text="휴대폰 번호"
      label="다음"
      format="phone"
      field="phoneNumber"
      onNext={() => navigate("/checkInTwoStep")}
    />
  );
};
export default CheckInOneStep;
