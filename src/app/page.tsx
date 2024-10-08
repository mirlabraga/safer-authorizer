"use client";

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

export default function MyApp() {
  return (
    <div>
      <Auth0Provider
        domain="http://localhost:3000"
        clientId="gS3C20Vt9iT7qy2yprLHjw7SuK8IDWjQ"
        authorizationParams={{
          redirect_uri: "http://localhost:3000",
        }}
      >
        <App/>
      </Auth0Provider>
    </div>
  );
}
