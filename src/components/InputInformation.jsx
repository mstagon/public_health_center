import { useOutletContext } from "react-router-dom";
import NextButton from "./NextButton";
import React, { useState } from "react";

const InputInformation = ({
  text,
  label,
  onNext,
  format,
  showButton = true,
  mtClass = "mt-24",
  field,
  value,
  onChange,
  skipContextUpdate = false,
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const { updateUser } = useOutletContext();

  const formatPhoneNumber = (value) => {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
  };

  const formatCase = (value, type) => {
    switch (type) {
      case "phone":
        return formatPhoneNumber(value);
      default:
        return value;
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value || "";
    const formatType = formatCase(value, format);
    setInputValue(formatType);

    if (onChange) {
      onChange(formatType);
    }

    if (!skipContextUpdate) {
      const valueToUpdate = format === "phone" ? formatType : value;
      updateUser({ [field]: valueToUpdate });
    }
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
        onChange={handleInputChange}
      />
      {showButton && (
        <NextButton disabled={!isButtonActive} label={label} onClick={onNext} />
      )}
    </div>
  );
};
export default InputInformation;
