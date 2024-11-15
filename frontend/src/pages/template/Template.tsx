"use client";

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Head from "./Head";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Template = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Container>
      {isAuthenticated ? (
        <Root data-testid="root">
          <Head
            user={user}
            isAuthenticated={isAuthenticated}
            loginWithRedirect={loginWithRedirect}
            logout={logout}
            data-testid="profile"
          ></Head>
          <Menu data-testid="menu"></Menu>
        </Root>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Log in</button>
        </div>
      )}
    </Container>
  );
};

export default Template;
