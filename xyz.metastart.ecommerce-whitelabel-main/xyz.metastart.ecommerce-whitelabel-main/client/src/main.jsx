import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";

// Providers
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./provider/userProvider";

// Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
