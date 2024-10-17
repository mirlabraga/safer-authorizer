"use client";

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from "./profile";


export default function MyApp() {

  let CallbackURI = "";

  if (typeof window !== "undefined" && window.location !== null) {
    CallbackURI = window.location.origin;
  }

  return (
    <div>
      <Auth0Provider
        domain="dev-q7rj5o44.us.auth0.com"
        clientId="BmCXzhkVGyzU9SH2n6EpqRQSBVabiPth"
        authorizationParams={{
          redirect_uri: CallbackURI,
          audience: "https://dev-q7rj5o44.us.auth0.com/api/v2/"
        }}
      >
        <Profile />
      </Auth0Provider>
    </div>
  );
}
