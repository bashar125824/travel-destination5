import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

export default function Nabbar(){
    return(
        <nav className='headerStyle'>
            <div className='linkStyle'>
                <Link to='/'>Home</Link>
            </div>
        </nav>

    )
}