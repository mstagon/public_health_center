import InputInformation from "../../components/InputInformation";
import { useNavigate } from "react-router-dom";
const Inquiry = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-grow">
      <InputInformation
        text="휴대폰 번호"
        format="phone"
        label="조회"
        onNext={navigate("/reservationDetails")}
      />
    </div>
  );
};
export default Inquiry;
