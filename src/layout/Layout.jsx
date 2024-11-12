import { useLocation } from "react-router-dom";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const showHeaderPaths = ["/"];
  const showHeader = showHeaderPaths.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;
