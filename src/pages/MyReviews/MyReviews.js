import React, { useEffect, useState } from 'react';
import MyReview from './MyReview';



const MyReviews = () => {
    const [myReviews, setMyReviews]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/myReviews')
        .then(res=> res.json())
        .then(data=> {
            setMyReviews(data)
        })
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                myReviews.map(option => <MyReview
                key={option._id}
                option={option}
                
                ></MyReview>)
            }
        </div>
    );
};

export default MyReviews;