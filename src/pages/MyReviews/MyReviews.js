import React, { useEffect, useState } from 'react';
import useDocumentTitle from '../../DynamicTitle/useDocumentTitle';
import MyReview from './MyReview';



const MyReviews = () => {
    const [myReviews, setMyReviews]= useState([])
    const [control, setControl]= useState(false)

    useEffect(()=>{
        fetch('http://localhost:5000/myReviews')
        .then(res=> res.json())
        .then(data=> {
            setMyReviews(data)
        })
    },[control])
    useDocumentTitle('GOOD CHOICE/myreviews')
    const handleDelete=(id)=>{
        console.log('deleting id ',id)
        fetch(`http://localhost:5000/myReview/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                setControl(!control)
                alert('deleted sucessfully')
                // const remainignReview = displayReview.filter(review => review._id!==option._id)
                // setDisplayReview(remainignReview)

            }

        })

    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                myReviews.map(option => <MyReview
                key={option._id}
                option={option}
                handleDelete={handleDelete}
                myReviews={myReviews}
                
               
                
                ></MyReview>)
            }
        </div>
    );
};

export default MyReviews;