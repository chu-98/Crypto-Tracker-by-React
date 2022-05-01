import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const darkMode = {
  textColor: "whitesmoke",
  bgColor: "#111",
};
const lightMode = {
  textColor: "#111",
  bgColor: "whitesmoke",
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightMode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
