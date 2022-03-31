import React from 'react';
import "./BrandA.css"

const BrandA = () => {
    return (
        <div style={{height:"700px"}}>
          
           <h1 style={{fontSize:"60px"}}>  Give Your Brand a</h1>
                <h2 style={{fontSize:"65px"}}>FaceLift! </h2>
            
           
            <div className='para'>
            <p>Free Branding and say goodbye to traditional
advertising methods. Let Brandofast worry about
handling your brand image, while you save time
and spend less!</p>
</div>
<div className='start'>
<h3>Get Started!</h3>
<h6>Have a look at Brandofast's Features</h6>
</div>
<img src="./Images/BrandA.gif" alt="" />
        </div>
    );
};

export default BrandA;