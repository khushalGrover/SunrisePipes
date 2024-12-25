import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import "./index.css"; // Import Tailwind CSS here

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
