import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavBottom from "./NavBottom";

const Layout = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
    
      </div>
    </>
  );
};

export default Layout;
