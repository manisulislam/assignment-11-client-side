import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';


const MyReview = ({ myReviews, option, handleDelete}) => {
    const [test, setTest]= useState(false)
    
    console.log ('my', myReviews)
    const {_id, serviceName, reviewerPhoto, name, reviewerName } = option
   

    return (

    

        <div>
             { 
            myReviews ?<div className="card w-72 my-12 shadow-xl">
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
                <Link><button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-primary w-full">DELETE</button></Link>
                <Link to={`/update/${_id}`}><button className="btn btn-outline btn-secondary w-full">EDIT</button></Link>


            </div>
            hello
        </div> : <p className='text-3xl text-center my-64 font-semibold'> No reviews  were added</p>
            
            
            }
           
           
        </div>
    );
};

export default MyReview;