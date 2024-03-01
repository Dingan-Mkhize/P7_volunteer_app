import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query"; // Import these
import App from "./App";
import "./index.css";
import { UserProvider } from "./contexts/UserContext"; // Adjust the import path as necessary

// Create a QueryClient instance
const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Wrap with QueryClientProvider */}
      <UserProvider>
        <App />
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
