import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingelAddService = ({ single }) => {
    const { _id, name, image, price, description} = single;
    return (
        <div className="card bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image}>
                <figure><img src={image} alt="Shoes" /></figure>

                </PhotoView>
            </PhotoProvider>
            
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.length > 100 ? description.slice(0,100): description}</p>
                <p>Price :$ {price}</p>
                
            </div>
        </div>
    );
};

export default SingelAddService;