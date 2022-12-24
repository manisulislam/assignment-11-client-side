import React from 'react';
import image from '../../assets/food.jpg'

const SectionOne = () => {
    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">THE BEST HEALTHY FOOD</h1>
      <p className="py-6 text-2xl">If you talk about food just as much as you eat it, you're in good company. We've got famous chefs and stars</p>
     
    </div>
  </div>
</div>
    );
};

export default SectionOne;