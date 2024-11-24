import { useNavigate } from "react-router-dom";
import RectangleCustomButton from "../../components/RectangleCustomButton.jsx";
const Reservation = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mt-36 justify-center  gap-28">
      <RectangleCustomButton
        label="예약하기"
        onClick={() => navigate("/appointment")}
      />
      <RectangleCustomButton
        label="조회하기"
        onClick={() => navigate("/inquiry")}
      />
    </div>
  );
};
export default Reservation;
