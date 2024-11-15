import { useLocation, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const location = useLocation();
  const pageHeaders = {
    "/": "동남구 보건소에 오신 것을 환영합니다.",
    "/a": "접수하기",
    "/b": "수납",
    "/c": "건강 증진 프로그램",
  };
  const headerText = pageHeaders[location.pathname] || "기본 텍스트";
  return (
    <>
      <Header text={headerText} />
      <Outlet />
    </>
  );
};
export default Layout;
