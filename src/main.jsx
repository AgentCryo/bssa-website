import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./Pages/CSS/General.css"
import Home from "./Pages/Home.jsx";
import Missions from "./Pages/Missions.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/missions" element={<Missions />} />
            </Routes>

            <center>
                <Link to="/">Home</Link>
                <Link to="/missions">View Missions</Link>
                <p className="warning">PSA: This website is for my RP-1 KSP role play, everything this website contains is fake and for the role play.</p>
            </center>
        </BrowserRouter>
    </StrictMode>,
)
