import { useLocation, Outlet } from "react-router-dom";
import Header from "./Header";
import React, { useState } from "react";

const Layout = () => {
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    appointmentDate: "",
  });

  const updateUser = (data) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  const location = useLocation();
  const pageHeaders = {
    "/": "동남구 보건소에 오신 것을 환영합니다.",
    "/checkIn": "접수하기",
    "/checkInTwoStep": "접수하기",
    "/consultation": "최근 진료 및 처방 약품 정보 조회",
    "/healthProgram": "건강 증진 프로그램",
    "/reservation": "예약 및 조회",
    "/acceptance": "수납",
    "/floorInformation": "층별 안내",
    "/appointment": "예약하기",
    "/inquiry": "조회하기",
    "/reservationDetails": "조회하기",
    "/settings": "수납자 정보",
  };
  const headerText = pageHeaders[location.pathname] || "기본 텍스트";
  return (
    <>
      <Header text={headerText} hideBackArrow={location.pathname === "/"} />
      <Outlet context={{ user, updateUser }} />
    </>
  );
};
export default Layout;
