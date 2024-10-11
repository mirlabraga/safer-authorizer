import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {}{' '}
        <button onClick={() => console.log("fadsf")}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }
};

export default Profile;