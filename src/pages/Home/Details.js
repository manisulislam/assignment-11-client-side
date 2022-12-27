import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Review from './Review';

const Details = () => {
    const {user} = useContext(AuthContext)
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
        <div className='my-12'>
        {user?.uid ?<Review></Review>: <Link to='/login'> Please log in to add a review  <button className="btn btn-primary">login</button></Link> }
        </div>
            

             
        </div>
       </div>
    );
};

export default Details;