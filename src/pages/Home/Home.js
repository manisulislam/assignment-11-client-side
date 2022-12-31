import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../DynamicTitle/useDocumentTitle';

import Banner from './Banner';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Service from './Service';
import SingelAddService from './SingelAddService';

const Home = () => {

    const [services, setServices]= useState([])
    const [addServices, setAddServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => {
           setServices(data)
        })
    },[])

    useEffect(()=>{
        fetch('http://localhost:5000/addServices')
        .then(res => res.json())
        .then(data => {
            setAddServices(data)
        })
    },[])
    

    useDocumentTitle('GOOD CHOICE/home')
    return (
        <div>  
               
            <Banner></Banner>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 m-5'>
                {
                    services.map(service=><Service 
                    key={service._id}
                    service={service}></Service>)
                }
               
            </div>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    addServices.map(single => <SingelAddService
                    key={single._id}
                    single= {single}
                    
                    ></SingelAddService>)
                }
                
            </div>
            <Link to='/servicesDetails'><button className="btn btn-primary mx-auto my-5">SEE ALL</button></Link>
           
        </div>
    );
};

export default Home;