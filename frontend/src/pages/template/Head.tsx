"use client";
import React from "react";
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

const Head = ({ user, isAuthenticated, loginWithRedirect, logout }: any) => {

  return (
    <Container>
      <TextField aria-label="title-select-login">Login Page</TextField>
      {isAuthenticated ?
      (<div>
        Hello {user?.name} {user?.email} Welcome! ! !
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          <br />
          <div>Log Out</div>
        </button>
      </div>): (<div>
        <button onClick={() => loginWithRedirect()}>Log in</button>
      </div>) }
    </Container>
  );
};

export default Head;
