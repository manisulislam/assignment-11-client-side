import React, { useEffect, useState } from 'react';

const AddServices = () => {

    const handleAddServices =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value; 
        const description= form.area.value;
        const price = form.price.value;
        const addServicesInfo ={
            name, image, description, price, 
        }
        console.log(addServicesInfo)
        form.reset()
       

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addServicesInfo)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })
        


    }
    return (
        <div>
            <h3 className='text-2xl font-bold my-12 text-orange-500 text-center'>ADD SERVICE IN GOOD CHOICE</h3>
            <form onSubmit={handleAddServices} className='m-12'>
            <input  type="text" name='name' placeholder="Enter Service Name" className="input input-bordered m-3 w-full max-w-xs" />
            <br />
            
            <input  type="file" name='image' placeholder="" className=" m-3  w-full max-w-xs" />
            <br />
            <input type="text" name='price' placeholder="price" className="input input-bordered m-3  w-full max-w-xs" />
            <br />
            <textarea name='area' className="textarea textarea-bordered m-3  w-full max-w-xs" placeholder='Enter services description'></textarea>
            <br />
            <button className="btn btn-primary w-full max-w-xs">SUBMIT</button>

            </form>
        </div>
    );
};

export default AddServices;