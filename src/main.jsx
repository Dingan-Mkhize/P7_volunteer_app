import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserProvider } from "./contexts/UserContext"; // Adjust the import path as necessary

const container = document.getElementById("root");
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
