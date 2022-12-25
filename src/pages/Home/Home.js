import React, { useEffect, useState } from 'react';

import Banner from './Banner';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Service from './Service';

const Home = () => {

    const [services, setServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => {
           setServices(data)
        })
    },[])
    return (
        <div>            
            <Banner></Banner>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <div className='grid grid-cols-2 m-5'>
                {
                    services.map(service=><Service 
                    key={service._id}
                    service={service}></Service>)
                }
            </div>
           
        </div>
    );
};

export default Home;