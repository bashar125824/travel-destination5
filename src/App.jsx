import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import Tourdetails from "./components/tourdetails/Tourdetails";
import data from "./data/Data";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home data = {data}/>} />
            <Route path="/city/:id" element={<Tourdetails data={data}/>} />
        </Routes>
    );
}

export default App;