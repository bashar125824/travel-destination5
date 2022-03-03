import React from 'react';
import Tour from './tour/Tour';
import "./tours.css";

let Tours = ({data}) => {
    return (
        <>
            {
               data.map((city , index) => {
                    return (
                        <Tour key={index} city = {city} />
                    )

                })
            }
        </>


    )
};

export default Tours;