import React from 'react';
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (<nav className='headerStyle'>
        <div className='linkStyle'>
        <Link to='/'>Home</Link>
        <Link to='/city/:id'>Tourdetails</Link>
        </div>
    </nav>

    )
};




export default Header;