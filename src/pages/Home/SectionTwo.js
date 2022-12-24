import React from 'react';
import image1 from '../../assets/food1.jpg'

const SectionTwo = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image1} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">EAT HEALTHY FOOD</h1>
      <p className="py-6 text-2xl"> A vegetable about as large and wise as a man's head.” 
      <br></br> “It takes four men to dress a salad: a wise man for the salt, a madman for the pepper, a miser for the vinegar, and a spendthrift for the oil.</p>
      
    </div>
  </div>
</div>
    );
};

export default SectionTwo;