import React from 'react';

const ServiceDetail = ({ allService }) => {
    const { name, image, details, price } = allService;

    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">view details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;