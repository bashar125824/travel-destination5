import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './components/home/Home';
import Tourdetails from "./components/tourdetails/Tourdetails";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city/:id" element={<Tourdetails/>} />
        </Routes>
    );
}

export default App;