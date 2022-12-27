import React from 'react';
import { VscAccount } from "react-icons/vsc";


const MyReview = ({ option }) => {
    const { serviceName, reviewerPhoto, name, reviewerName } = option
    return (
        <div className="card w-72 my-12 shadow-xl">
            <div className="card-body">
                <h2 className="card-title"><span className='text-lg text-orange-400'>Service Name:</span> {serviceName}</h2>
                <div className='flex   justify-between items-center'>
                    <div className="avatar">
                        <div className="w-24 p-12 rounded-md">
                            {!reviewerPhoto == 0 ? <VscAccount className=''></VscAccount>:<img src={reviewerPhoto} alt=''/>}
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