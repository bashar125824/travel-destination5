import React from 'react';
//import Tours from '../Tours';
import { Link } from "react-router-dom";
import "./tour.css";

export default function Tour({city}){
    return (
        <div className="bodyDiv">
            <h2>{city.name}</h2>

            <Link to={`city/${city.id}`}>
                <img src={city.image} alt="img" />
                <hr />
            </Link>

        </div>
    )
};