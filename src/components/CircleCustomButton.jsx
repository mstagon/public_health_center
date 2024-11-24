const CircleCustomButton = ({ label, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-80 h-80  mx-8 rounded-full flex flex-col justify-center items-center bg-[#0000] border border-[#ADADAD] text-3xl font-semibold hover:shadow-xl"
    >
      <Icon className="mb-3" />
      <span className="text-center">{label}</span>
    </button>
  );
};

export default CircleCustomButton;
