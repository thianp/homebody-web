import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const isAdmin = await axios.get("/checkadmin");
          console.log(isAdmin);
          if (isAdmin.data.isAdmin === true) {
            const resMe = await axios.get("/admin/me");
            setUser(resMe.data.admin);
            setRole("admin");
          } else if (isAdmin.data.isAdmin === false) {
            const resMe = await axios.get("/users/me");
            setUser(resMe.data.user);
            setRole("user");
          }
        }
      } catch (err) {
        removeAccessToken();
        navigate("/login");
      }
    };
    fetchMe();
  }, []);
  console.log(user);
  console.log(role);

  const signUp = async (input) => {
    const res = await axios.post("/auth/signup", input);
    setAccessToken(res.data.token);
    const resMe = await axios.get("/users/me");
    setUser(resMe.data.user);
    setRole(res.data.role);
  };

  const logIn = async (input) => {
    const res = await axios.post("/auth/login", input);
    console.log(res.data.role);
    setAccessToken(res.data.token);
    const resMe = await axios.get("/users/me");
    setUser(resMe.data.user);
    setRole(res.data.role);
  };

  const adminLogIn = async (input) => {
    const res = await axios.post("/admin/login", input);
    setAccessToken(res.data.token);
    const resMe = await axios.get("/admin/me");
    setUser(resMe.data.admin);
    setRole(res.data.role);
  };

  const logOut = () => {
    removeAccessToken();
    setUser(null);
    setRole(null);
  };

  const adminLogOut = () => {
    removeAccessToken();
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        user,
        role,
        logIn,
        logOut,
        adminLogIn,
        adminLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export { AuthContext };
