import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AuthLayout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  );
}

export default AuthLayout;
