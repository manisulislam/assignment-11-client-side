import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail';

const ServicesDetails = () => {
    const [allServices, setAllServices]= useState([])
    console.log(allServices)
    useEffect(()=>{
        fetch('http://localhost:5000/servicesDetails')
        .then(res=>res.json())
        .then(data =>{
            setAllServices(data)
        })
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 grid-cols-3 m-8'>
            {
                allServices.map(allService => <ServiceDetail
                key={allService._id}
                allService= {allService}
                ></ServiceDetail>)
            }
        </div>
    );
};

export default ServicesDetails;