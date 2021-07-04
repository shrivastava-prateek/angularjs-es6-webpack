import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./app/app.module";
import Navigation from "./components/Navigation";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("reactapp")
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Navigation />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("about-react")
);
