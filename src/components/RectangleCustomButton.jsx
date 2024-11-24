const RectangleCustomButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-96 h-96 mx-8 rounded-2xl flex justify-center items-center bg-[#0000] border border-[#ADADAD] text-3xl font-semibold hover:shadow-xl"
    >
      <span className="text-center">{label}</span>
    </button>
  );
};

export default RectangleCustomButton;
