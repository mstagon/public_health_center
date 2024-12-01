import React from "react";
const Modal = ({ text, isOpen, modalClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed z-50 inset-0 bg-zinc-600 bg-opacity-50  w-full h-full  ">
      <div className="bg-white rounded-xl w-1/4 h-1/4  fixed justify-center text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4">
        <div className="p-12 font-semibold text-3xl">{text}</div>
        <hr />
        <button className="pt-4 font-semibold text-lg" onClick={modalClose}>
          닫기
        </button>
      </div>
    </div>
  );
};
export default Modal;
