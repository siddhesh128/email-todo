import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import LoginHeader from "../components/Login/LoginHeader";
import LoginContainer from "../components/Login/LoginContainer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem("token");

    if (isAuthenticated) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <LoginContainer>
      <ToastContainer position="top-right" autoClose={3000} />
      <LoginHeader />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
