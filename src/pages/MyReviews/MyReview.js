import React from 'react';

const MyReview = ({ option }) => {
    const { serviceName, reviewerPhoto, name, reviewerName } = option
    return (
        <div className="card w-72 shadow-xl">
            <div className="card-body">
                <h2 className="card-title"><span className='text-lg text-orange-400'>Service Name:</span> {serviceName}</h2>
                <div className='flex   justify-between items-center'>
                    <div className="avatar">
                        <div className="w-24 pt-5 rounded-full">
                            <img src={reviewerPhoto} />
                        </div>
                    </div>
                    <h1>{reviewerName}</h1>
                </div>
                <p> <span className='text-1xl text-orange-400'>Our Customer review:</span> {name}</p>
                <button className="btn btn-outline btn-primary">DELETE</button>
                <button className="btn btn-outline btn-secondary">UPDATE</button>


            </div>
        </div>
    );
};

export default MyReview;