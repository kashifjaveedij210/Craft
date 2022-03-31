import React from "react";
import "./BrandB.css";

const BrandB = () => {
  return (
    <div>
      <div className="hed">
        <h1 style={{ fontSize: "60px" }}>Branding isn’t easy,</h1>
        <h1 style={{ fontSize: "60px" }}> and we know why.</h1>
      </div>
      <div className="div1">
        <img src="./Images/BrandB2.png" className="imgs" alt="" />
        <p className="p1">
          {" "}
          <span style={{ fontSize: "40px", color: "black" }}>
            {" "}
            <h3>Sky High Costs</h3>
          </span>
          Advertising agencies typically charge a lot of money to businesses.
        </p>
      </div>
      <div>
        <div className='div2'>
            <img src="./Images/BrandB3.css" className="imgs2" alt="" />
               <p className="p2">Who To Trust
Deciding between different companies and products can be tough and time-consuming. A one-stop shop is hard to find.</p>
           </div>
           <div className='div3'>
               <img src="./Images/BrandB4.png" className="imgs3" alt="" /> 
               <p className="p3"> <span> Zero Creativity</span>
It’s tough for companies to find new and creative solutions for their advertisement campaigns.</p></div>
           <div className="div4"> 
           <img src="./Images/BrandB5.png" className="imgs4" alt="" />
           <p className="p4"> Too Much Hassle
Even a good branding plan, will still kill a lot of your time by needing you to come up with the ideas and provide insights by giving information yourself.</p>
</div> 
      </div>
      <div className="mainimg">
        <img src="./Images/BrandB.png" alt="" />
      </div>
    </div>
  );
};

export default BrandB;
