import React from "react";
import "./style.css";

export const CookiesScors = (props) => {
  const { score, valueClick, totalScore, changeScores, valueCPS } = props;
  return (
    <>
      <img
        src="https://www.ptitchef.com/imgupl/recipe/donuts-a-l-americaine--md-452758p701166.jpg"
        className="cookie-btn"
        onClick={() => {
          changeScores(valueClick);
        }}
      />
      <p>Score: {score}</p>
      <p>Total score: {totalScore} </p>
      <p>Click par seconde: {valueCPS} </p>
    </>
  );
};
