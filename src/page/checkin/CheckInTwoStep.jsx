import InputInformation from "../../components/InputInformation";

import { useNavigate } from "react-router-dom";
const CheckInTwoStep = () => {
  const navigate = useNavigate();

  return (
    <InputInformation
      text="이름"
      label="다음"
      onNext={() => navigate("/checkInThreeStep")}
    />
  );
};
export default CheckInTwoStep;
