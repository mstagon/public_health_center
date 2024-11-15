import React from "react";
const Header = ({ text }) => {
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <span className="text-4xl p-1 mx-auto font-bold text-center pl-24">
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
