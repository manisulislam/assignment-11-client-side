import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ allService }) => {
    const {_id, name, image, details, price } = allService;

    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure><img className='w-44' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.length>100? details.slice(0,100) + '...': details}</p>
                <p>price: ${price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/details/${_id}`}><button  className="btn btn-primary">view details</button></Link>  
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;