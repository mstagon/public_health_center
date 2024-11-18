const CheckIn = () => {
  return (
    <div>
      <div className="justify-center flex mt-24 mb-12 font-semibold text-3xl">
        휴대폰 번호를 입력해주세요
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          className=" border-b-2 border-[#485FE9] text-3xl w-1/3 size-20 p-5"
          placeholder="휴대폰 번호"
        />
      </div>
    </div>
  );
};
export default CheckIn;
