import React from 'react';

const Review = () => {
    return (
        <div>
           
            <div className="form-control w-96 my-12 mx-auto">
                <label className="label">
                    <span className="label-text text-2xl font-semibold">Please enter your review</span>
                    
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                <label className="label">
                    
                </label>
                <button className="btn btn-primary">Button</button>
            </div>
            
        </div>
    );
};

export default Review;