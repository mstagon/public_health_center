import React from "react";
const NextButton = ({ disabled, onClick }) => {
  return (
    <button
      className={` w-1/3 h-20 text-2xl rounded-xl ${
        disabled ? "bg-[#f6f6f6]" : "bg-[#788AF8]"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      다음
    </button>
  );
};
export default NextButton;
