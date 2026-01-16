import React from "react";
import { TenantLoginForm } from "./TenantLoginForm";
import Navbar from "../../components/Navbar";

export const TenantLogin = () => {
  return (
    <div>
    
      <fieldset>
        <legend>Tenant Login</legend>
        <TenantLoginForm />
      </fieldset>
    </div>
  );
};
