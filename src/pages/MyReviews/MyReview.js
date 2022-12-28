import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';


const MyReview = ({ option,displayReview,setDisplayReview }) => {
    
    const {_id, serviceName, reviewerPhoto, name, reviewerName } = option
    const handleDelete=(option)=>{
        console.log('deleting id ', option._id)
        fetch(`http://localhost:5000/myReview/${option._id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted sucessfully')
                const remainignReview = displayReview.filter(review => review._id!==option._id)
                setDisplayReview(remainignReview)

            }

        })

    }

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
                <Link><button onClick={()=>handleDelete(option)} className="btn btn-outline btn-primary w-full">DELETE</button></Link>
                <Link to={`/update/${_id}`}><button className="btn btn-outline btn-secondary w-full">EDIT</button></Link>


            </div>
        </div>
    );
};

export default MyReview;