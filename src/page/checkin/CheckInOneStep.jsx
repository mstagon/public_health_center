import NextButton from "../../components/NextButton";
import React, { useState } from "react";

const CheckInOneStep = () => {
  const [inputNumber, setInputNumber] = useState("");

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  const isButtonActive = inputNumber.length > 0;

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="font-semibold text-3xl mt-24">
        휴대폰 번호를 입력해주세요
      </div>
      <input
        type="text"
        placeholder="휴대폰 번호"
        className="border-b-2 border-[#485FE9] text-3xl w-1/3 size-20 p-5"
        value={inputNumber}
        onChange={handleInputChange}
      />
      <NextButton disabled={!isButtonActive} />\
    </div>
  );
};
export default CheckInOneStep;
