import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegionPage from "./RegionPage.jsx";
import './index.css'
import App from './App.jsx'
<RegionPage/>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

{/*
 import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import RegionPage from "./RegionPage.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/region/:name" element={<RegionPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);*/}
