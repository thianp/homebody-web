import "./App.css";
import MyHelmet from "./components/head/Helmet";
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";
import ProductListing from "./components/pages/ProductListing";
import ProductPage from "./components/pages/ProductPage";
import ShoppingCart from "./components/pages/ShoppingCart";
import Checkout from "./components/pages/Checkout";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <MyHelmet />
      <div className="body-container">
        <Login />
      </div>
    </>
  );
}

export default App;
