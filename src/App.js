import "./App.css";
import MyHelmet from "./components/head/Helmet";
import Router from "./route/Router";

function App() {
  return (
    <>
      <MyHelmet />
      <div className="body-container">
        <Router />
      </div>
    </>
  );
}

export default App;
