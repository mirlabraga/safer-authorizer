"use client";

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from "./profile";

export default function MyApp() {
  return (
    <div>
      <Auth0Provider
        domain="http://localhost:3000"
        clientId="gS3C20Vt9iT7qy2yprLHjw7SuK8IDWjQ"
        onRedirectCallback={() => "http://localhost:3000"}
      >
        <Profile />
      </Auth0Provider>
    </div>
  );
}
