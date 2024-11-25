import NextButton from "./NextButton";
import React, { useState } from "react";

const InputInformation = ({
  text,
  label,
  onNext,
  format,
  showButton = true,
  mtClass = "mt-24",
}) => {
  const [inputValue, setInputValue] = useState("");

  const formatPhoneNumber = (value) => {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
  };

  const formatIdNumber = (value) => {
    value = value.replace(/[^0-9]/g, "");
    let formattedValue = value.substring(0, 6);
    if (value.length >= 7) {
      formattedValue += "-" + value.substring(6, 7) + "******";
    }
    return formattedValue;
  };
  const formatCase = (value, type) => {
    switch (type) {
      case "phone":
        return formatPhoneNumber(value);
      case "idNumber":
        return formatIdNumber(value);
      default:
        return value;
    }
  };
  const handleInputChange = (e) => {
    const formatType = formatCase(e.target.value, format);
    setInputValue(formatType);
  };

  const isButtonActive = inputValue.length > 0;
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className={`font-semibold text-3xl ${mtClass}`}>
        {text} 입력해주세요
      </div>
      <input
        type="text"
        placeholder={text}
        className="border-b-2 border-[#485FE9] text-3xl min-w-96 size-20 p-5"
        value={inputValue}
        format={formatCase}
        onChange={handleInputChange}
      />
      {showButton && (
        <NextButton disabled={!isButtonActive} label={label} onClick={onNext} />
      )}
    </div>
  );
};
export default InputInformation;
