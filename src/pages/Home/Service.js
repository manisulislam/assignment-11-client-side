import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id,name, price, details, image}= service;
    return (
        <div className="card m-7 bg-base-100 shadow-xl">
            <PhotoProvider>
               <PhotoView src={image}>
               <figure><img className='w-44' src={image} alt="Shoes" /></figure>

               </PhotoView>

            </PhotoProvider>
            
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details.length>100 ? details.slice(0,100)+ '...': details}</p>
                <p>Price:${price}</p>
                <div className="card-actions justify-end">
                 <Link to={`/details/${_id}`}><button  className="btn btn-primary">View Details</button></Link>   
                </div>
            </div>
        </div>
    );
};

export default Service;