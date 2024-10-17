import { AuthService } from "@auth0/auth0-angular";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const auth  = AuthService

  return (
    <button onClick={
      () => logout({  logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;

// return (
//   <button onClick={
//     () => logout({  logoutParams: { returnTo: window.location.origin } })}>
//     Log Out
//   </button>
// );