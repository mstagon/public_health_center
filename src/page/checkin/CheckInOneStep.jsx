import InputInformation from "../../components/InputInformation";
import { useNavigate } from "react-router-dom";

const CheckInTwoStep = () => {
  const navigate = useNavigate();
  return (
    <InputInformation
      text="휴대폰 번호"
      label="다음"
      format="phone"
      onNext={() => navigate("/checkInTwoStep")}
    />
  );
};
export default CheckInTwoStep;
