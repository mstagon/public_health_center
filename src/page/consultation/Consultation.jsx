import React from "react";
import InputInformation from "../../components/InputInformation";
import { useNavigate, useOutletContext } from "react-router-dom";

const Consultation = () => {
  const { user } = useOutletContext();
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/patient/${user.phoneNumber}`);
  };
  return (
    <div>
      <InputInformation
        text="휴대폰 번호"
        format="phone"
        field="phoneNumber"
        label="조회"
        onNext={handleSearch}
      />
    </div>
  );
};

export default Consultation;
