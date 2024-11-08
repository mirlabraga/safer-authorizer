"use client";

import React, { ReactElement } from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Template = (page: ReactElement | undefined) => {
  return (
    <Root data-testid="root">
      <Menu data-testid="menu"></Menu>
      <Profile data-testid="profile"></Profile>
      {page}
    </Root>
  );
};

export default Template;
