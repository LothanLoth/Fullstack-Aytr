import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Greet from "./pages/Greet.jsx"
import RecentPage from "./pages/RecentPage.jsx"
import PageClear from "./pages/PageClear.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/greet" element={<Greet />} />
        <Route path="/recent" element={<RecentPage />} />
        <Route path="/clear" element={<PageClear />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

