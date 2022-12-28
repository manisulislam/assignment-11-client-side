import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";


const ReviewUpdate = () => {
    const reviewInfo = useLoaderData()
    const { _id, serviceName, reviewerPhoto, name, reviewerName } = reviewInfo;
    const [reviewUpdate, setReviewUpdate] = useState([])
    const handleUpdate = event => {
        event.preventDefault()

    }

    const handleChange = (event)=>{
        event.preventDefault()
        const fieldValue = event.target.value;
        console.log(fieldValue)
       
    }


    return (
        <div>
            <h3>please update review</h3>
            <div className="card w-72 my-12 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><span className='text-lg text-orange-400'>Service Name:</span> {serviceName}</h2>
                    <div className='flex   justify-between items-center'>
                        <div className="avatar">
                            <div className="w-24 p-12 rounded-md">
                                {!reviewerPhoto == 0 ? <VscAccount className=''></VscAccount> : <img src={reviewerPhoto} alt='' />}
                            </div>
                        </div>
                        <h1>{reviewerName}</h1>
                    </div>
                    <p> <span className='text-1xl text-orange-400'>Our Customer review:</span> {name}</p>
                    <form onSubmit={ handleUpdate } className="form-control  my-12 mx-auto">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">If you want to update your review</span>
                        </label>
                        <textarea name='reviewText' onChange={handleChange} value='name' className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        <label className="label">
                        </label>
                        <button className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default ReviewUpdate;