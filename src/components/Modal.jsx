import React from "react";
import { useNavigate } from "react-router-dom";
const Modal = ({ text, isOpen, modalClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;
  return (
    <div className="fixed z-50 inset-0 bg-zinc-600 bg-opacity-50 w-full h-full">
      <div className="bg-white rounded-xl w-[500px] h-[400px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <div className="flex-1 overflow-y-auto p-8 flex items-center justify-center">
          <div className="font-semibold text-3xl text-center">{text}</div>
        </div>
        <div className="p-6 border-t flex justify-center">
          <button
            className="font-semibold text-lg"
            onClick={() => {
              modalClose();
              navigate("/");
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
