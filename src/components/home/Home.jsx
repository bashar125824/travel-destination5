import React from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./home.css";

import Tours from "../tours/Tours";


function Home({data}) {
    return (
        <>
            <Header />
            <Tours data={data} />
            <Footer />

        </>

    )
}



export default Home;