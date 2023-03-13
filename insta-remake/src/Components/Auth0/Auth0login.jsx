import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  console.log("pls output")
  return loginWithRedirect();
};

export default LoginButton; 