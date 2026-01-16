import React from "react";
import { UserLoginForm } from "./UserLoginForm";
import Navbar from "../../components/Navbar";

export const UserLogin = () => {
  return (
    <div>
      
      <fieldset>
        <legend>User Login</legend>
        <UserLoginForm />
      </fieldset>
    </div>
  );
};
