import React from "react";
import { ReactComponent as BackArrow } from "../assets/backarrow.svg";
import { useNavigate } from "react-router-dom";
const Header = ({ text, hideBackArrow }) => {
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex items-center justify-between p-5">
        {!hideBackArrow && (
          <BackArrow className="size-20" onClick={handleBackPage} />
        )}
        <span className="text-5xl p-1 mx-auto font-bold text-center pl-6">
          {text}
        </span>
        <span className="bg-[#FCFCFC] text-xl px-5 py-3 border border-[#E2E2E2] rounded-full hover:drop-shadow-xl">
          직원호출
        </span>
      </div>
    </>
  );
};
export default Header;
