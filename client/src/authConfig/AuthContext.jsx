import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    role: null,
    user: null,
    loading: true,
  });

  const checkAuth = async () => {
    try {
      const res = await axiosInstance.get("/me");

      setAuth({
        isAuth: true,
        role: res.data.role,
        user: res.data.user,
        loading: false,
      });
    } catch (err) {
      setAuth({
        isAuth: false,
        role: null,
        user: null,
        loading: false,
      });
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {!auth.loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
