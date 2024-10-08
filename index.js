import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './src/app/page';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="http://localhost:3000"
    clientId="gS3C20Vt9iT7qy2yprLHjw7SuK8IDWjQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);