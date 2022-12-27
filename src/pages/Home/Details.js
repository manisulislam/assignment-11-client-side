import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const viewDetails = useLoaderData()
    const { _id, name, image, details, price } = viewDetails;

    return (
        
       <div>
         <div className="card w-96 bg-base-100 mx-auto shadow-xl my-8">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>Price: ${price}</p>
               
            </div>
            
        </div>
        <div>
            <h1 className='text-4xl font-semibold text-orange-500'>OUR CUSTOMER REVIEW</h1>
            

             
        </div>
       </div>
    );
};

export default Details;