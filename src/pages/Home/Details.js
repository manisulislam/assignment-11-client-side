import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const viewDetails = useLoaderData()
    const { _id, name, image, details, price } = viewDetails;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;