import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Calculator } from "./components/Calculator";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
