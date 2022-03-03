import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Tourdetails({ data }) {
    let { id } = useParams();


    let city = data.filter(city => city.id === id)





    return (
        <>
            <Header></Header>
            <article>
                <div>
                    {city[0].name}
                    {city[0].info}

                    <img src={city[0].image} />

                </div>
                
            </article>
            <Footer></Footer>


        </>

    )
};

export default Tourdetails;