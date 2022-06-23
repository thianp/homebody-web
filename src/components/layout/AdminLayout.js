import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage";

function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
}

export default AdminLayout;
