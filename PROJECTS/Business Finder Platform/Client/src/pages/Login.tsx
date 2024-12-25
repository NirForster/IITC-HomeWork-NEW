import React from "react";
import logo from "../assets/business-finder-logo.png";
import { LoginCardWithForm } from "../components/LoginCardForm";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <img
        src={logo}
        alt="logo"
        className="max-w-[325px] h-[150px] rounded-md"
      />
      <div className="p-4">
        <LoginCardWithForm />
      </div>
    </div>
  );
};

export default Login;
