import React from "react";
import { createTheme } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import { render } from "react-dom";

const theme = createTheme();

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
