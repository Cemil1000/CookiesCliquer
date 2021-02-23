import React from "react";
import './style.css'

export const CookiesScors = (props) => {
const {score , setScore} = props
  return (
    <>
      <img src="https://www.ptitchef.com/imgupl/recipe/donuts-a-l-americaine--md-452758p701166.jpg" className='cookie-btn' onClick={()=>{setScore()}} />
      <p>Score: {score}</p>
    </>
  );
};
