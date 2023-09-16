import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/Main/MainPage";
import Category from "./Components/Pages/Category";
import Post from "./Components/Pages/Post";
import Page from "./Components/Pages/Page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
         <Route path="/" element={<MainPage />} />
         <Route path="/category/:categoryId" element={<Category />} />
         <Route path="/post/:slug" element={<Post />} />
         <Route path="/:page" element={<Page />} />
         </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
