import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [logInInputs, setLogInInputs] = useState({
    email: "",
    password: "",
  });

  const { logIn } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const handleSubmitLogIn = async (e) => {
    try {
      e.preventDefault();

      if (logInInputs.password === "") {
        setError("Password is required");
      } else {
        await logIn(logInInputs);
        navigate("/");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    let updatedValue = {};
    updatedValue = { [e.target.id]: e.target.value };
    setLogInInputs((logInInputs) => ({
      ...logInInputs,
      ...updatedValue,
    }));
  };

  return (
    <>
      {/* ----- Login ----- */}
      <div className="login">
        <h1 className="heading-text">Log In</h1>
        <form onSubmit={handleSubmitLogIn}>
          <div className="form-group">
            <label className="mt-3" for="email">
              Email (username)
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={logInInputs.email}
              onChange={(e) => handleChange(e)}
            />
            <label className="mt-3" for="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              value={logInInputs.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <button className="black-button px-5" type="submit">
                Log In
              </button>
            </div>
            <div className="col-6">
              <button
                className="white-button"
                onClick={() => navigate("/register")}
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
