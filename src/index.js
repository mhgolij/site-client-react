import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/Main/MainPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
         <Route path="/" element={<MainPage />} />
         </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
