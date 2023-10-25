import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./context/UserContextProvider";
import AppContextProvider from "./context/AppContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </UserProvider>
  </React.StrictMode>
);
