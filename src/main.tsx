import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";

import "./styles/global.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "react-toastify/dist/ReactToastify.css";
import { AppContextProvider } from "./contexts/AppContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
      <ToastContainer 
        autoClose={2000}
        position="bottom-right"
      />
    </AppContextProvider>
  </React.StrictMode>
);
