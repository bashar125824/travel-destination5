import React from 'react';
import "./tours.css";

const Tours = (props) => {
    return (
        <>
            {
                props.tours.map((tour, index) => {
                    return (
                        <div key={index}>
                            <div className="bodyDiv">
                                <h2>{tour.name}</h2>
                                <img src={tour.image} alt="img" />
                            </div>
                            <hr />

                        </div>
                    )

                })
            }
        </>


    )
};

export default Tours;