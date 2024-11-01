"use client";

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TextField = styled.h3`
  width: 300px;
  padding: 2px;
`;

const Login = () => {
  const { user, isAuthenticated, loginWithRedirect, isLoading, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <Container>
        Hello {user?.name} {user?.email} Welcome! ! !
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          <br />
          <div>Log Out</div>
        </button>
      </Container>
    );
  } else {
    return (
      <Container>
        <TextField aria-label="title-select-clinic">Login Page:</TextField>
        <button onClick={() => loginWithRedirect()}>Log in</button>
      </Container>
    );
  }
};

export default Login;
