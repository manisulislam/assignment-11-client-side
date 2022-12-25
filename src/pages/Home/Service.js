import React from 'react';

const Service = ({service}) => {
    const {name, price, details, image}= service;
    return (
        <div className="card w-96 m-7 bg-base-100 shadow-xl">
            <figure><img className='w-44' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.length>100 ? details.slice(0,100)+ '...': details}</p>
                <p>Price:${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;