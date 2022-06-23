import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import AuthLayout from "../components/layout/AuthLayout";
import HomePage from "../components/pages/HomePage";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import ProductListing from "../components/pages/ProductListing";
import ProductPage from "../components/pages/ProductPage";
import ShoppingCart from "../components/pages/ShoppingCart";
import Checkout from "../components/pages/Checkout";
import AccountSettings from "../components/pages/AccountSettings";
import AboutUs from "../components/pages/AboutUs";
import AdminLayout from "../components/layout/AdminLayout";
import AdminLogin from "../components/pages/AdminLogin";
import AdminHomePage from "../components/pages/AdminHomePage";
import ManageProducts from "../components/admin/ManageProducts";
import ViewOrders from "../components/pages/ViewOrders";

function Router() {
  const { user, role } = useContext(AuthContext);
  console.log(role);
  return (
    <Routes>
      {user ? (
        role === "user" ? (
          <>
            <Route path="/" element={<AuthLayout />}>
              <Route path="" element={<HomePage />} />
              <Route path="categories/:id" element={<ProductListing />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="cart" element={<ShoppingCart />} />
              <Route path="checkout/:id" element={<Checkout />} />
              <Route path="profile" element={<AccountSettings />} />
              <Route path="about-us" element={<AboutUs />} />
            </Route>
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </>
        ) : (
          <>
            <Route path="/" element={<AdminLayout />}>
              <Route path="" element={<AdminHomePage />}>
                <Route path="/manage-products" element={<ManageProducts />} />
                <Route path="/view-orders" element={<ViewOrders />} />
              </Route>
            </Route>
            {/* <Route path="*" element={<Navigate to="/admin" />} /> */}
          </>
        )
      ) : (
        <>
          <Route path="/" element={<AuthLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="categories/:id" element={<ProductListing />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="about-us" element={<AboutUs />} />
          </Route>
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="login" element={<AdminLogin />} />
          </Route>
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </>
      )}
    </Routes>
  );
}

export default Router;
