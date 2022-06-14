import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AuthContextProvider from "./contexts/AuthContext";
import ErrorContextProvider from "./contexts/ErrorContext";
import AddressContextProvider from "./contexts/AddressContext";
import CategoriesContextProvider from "./contexts/CategoriesContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorContextProvider>
        <AuthContextProvider>
          <CategoriesContextProvider>
            <AddressContextProvider>
              <App />
            </AddressContextProvider>
          </CategoriesContextProvider>
        </AuthContextProvider>
      </ErrorContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
