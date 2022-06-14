import "./App.css";
import MyHelmet from "./components/head/Helmet";
import Router from "./route/Router";
import { Toast } from "bootstrap";
import { useContext, useEffect, useRef } from "react";
import { ErrorContext } from "./contexts/ErrorContext";

function App() {
  const { error, setError } = useContext(ErrorContext);
  const toastEl = useRef();

  useEffect(() => {
    if (error) {
      const toast = new Toast(toastEl.current);
      toast.show();
      setTimeout(() => setError(null), 7000);
    }
  }, [error]);

  return (
    <>
      <MyHelmet />
      <div className="body-container">
      <div
        className="toast-container position-fixed bottom-0 start-50 translate-middle-x"
        style={{ zIndex: 2000 }}
      >
        <div
          className="toast align-items-center text-white bg-danger border-0"
          ref={toastEl}
        >
          <div className="d-flex">
            <div className="toast-body">{error}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
            ></button>
          </div>
        </div>
      </div>
        <Router />
      </div>
    </>
  );
}

export default App;
