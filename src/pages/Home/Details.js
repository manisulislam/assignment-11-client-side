import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useDocumentTitle from '../../DynamicTitle/useDocumentTitle';
import Review from './Review';


const Details = () => {
    const {user} = useContext(AuthContext)
    const viewDetails = useLoaderData()
    const { _id, name:serviceName, image, details, price } = viewDetails;
    const handleReview =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name= form.reviewText.value;
        const serviceId = _id
        const reviewerEmail = user.email;
        const reviewerName = user.displayName;
        const reviewerPhoto = user.photoURL

        const info={
            name, serviceId,
            serviceName, reviewerEmail,
            reviewerPhoto, reviewerName
        }
        console.log(info)
        form.reset()
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res=> res.json())
        .then(data=> {
            
            console.log(data)
        
        
        
        })

    }
    useDocumentTitle('GOOD CHOICE/home/viewdetails')

    return (
        
       <div>
         <div className="card w-96 bg-base-100 mx-auto shadow-xl my-8">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{details}</p>
                <p>Price: ${price}</p>
               
            </div>
            
        </div>
        
        <div>
            <h1 className='text-4xl font-semibold text-orange-500'>OUR CUSTOMER REVIEW</h1>
        <div className='my-12'>
        <Review></Review>

        {user?.uid ?
        <form onSubmit={handleReview} className="form-control w-96 my-12 mx-auto">
        <label className="label">
            <span className="label-text text-2xl font-semibold">Please enter your review</span>
        </label>
        <textarea name='reviewText'  className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
        <label className="label">   
        </label>
        <button  className="btn btn-primary">Submit</button>
    </form>
        
        :
        
        
        <Link to='/login'> Please log in to add a review  <button className="btn btn-primary">login</button></Link> }
        </div>
            

             
        </div>
       </div>
    );
};

export default Details;