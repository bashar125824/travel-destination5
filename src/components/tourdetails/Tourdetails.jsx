import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import "./tourdetails.css";

function Tourdetails({ data }) {
    let { id } = useParams();


    let city = data.filter(city => city.id === id)





    return (
        <>
            <Header></Header>
            <article>
                <div>
                    <p>{city[0].name}</p>
                    <hr />
                    {city[0].info}
                    <hr />

                    <img src={city[0].image} />

                </div>
                
            </article>
            <Footer></Footer>


        </>

    )
};

export default Tourdetails;