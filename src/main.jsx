import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Ecommerce from "./pages/projects/Ecommerce.jsx";
import ThemeProvider from "./components/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/ecommerce" element={<Ecommerce />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);