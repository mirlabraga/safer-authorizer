import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

let CallbackURI = "";

if (typeof window !== "undefined" && window.location !== null) {
  CallbackURI = window.location.origin;
}

root.render(
  <React.StrictMode>
    <Auth0Provider
        domain="dev-q7rj5o44.us.auth0.com"
        clientId="BmCXzhkVGyzU9SH2n6EpqRQSBVabiPth"
        authorizationParams={{
          redirect_uri: CallbackURI,
          audience: "https://dev-q7rj5o44.us.auth0.com/api/v2/"
        }}
      >
        <App />
      </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
