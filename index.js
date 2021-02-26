import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { BonusCookies } from "./component/BonusCookies";
import { useInterval } from "react-use-timeout";

import { CookiesScors } from "./component/CookiesScors";

const App = (props) => {
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [valueClick, setValueClick] = useState(1);
  const [valueAutoClick, setValueAutoClick] = useState(0);
  const [valueGrandMa, setValueGrandMa] = useState(0);
  const [isValueAutoClick, setIsValueAutoClick] = useState(false);
  const [isValueGrandMa, setIsValueGrandMa] = useState(false);
  const [priceValueClick, setPriceValueClick] = useState(10);
  const [priceAutoClick, setPriceAutoClick] = useState(50);
  const [priceGrandMa, setPriceGrandMa] = useState(500);

  const callBack = useCallback(() => {
    changeScores(valueAutoClick);
  }, [score, totalScore, valueAutoClick]);

  const grandMaCallBack = useCallback(() => {
    changeScores(valueGrandMa);
  }, [score, totalScore, valueGrandMa]);

  const timeout = useInterval(callBack, 1000);
  const grandMaTimeout = useInterval(grandMaCallBack, 1000)

  if (isValueAutoClick) {
    timeout.start();
  }
  if (isValueGrandMa) {
    grandMaTimeout.start();
  }

  const changeScores = (newScore)=>{
    setScore(score + newScore)
    setTotalScore(newScore + totalScore)
  }

  return (
    <div>
      <CookiesScors
        score={score}
        valueClick={valueClick}
        totalScore={totalScore}
        valueCPS={valueAutoClick + valueGrandMa}
        changeScores={(newScore) => {
          changeScores(newScore);
        }}
      />{" "}
      <BonusCookies
        valueClick={valueClick}
        setValueClick={(valueClick) => {
          setValueClick(valueClick);
        }}
        valueAutoClick={valueAutoClick}
        setValueAutoClick={(valueAutoClick) => {
          setValueAutoClick(valueAutoClick);
        }}
        isValueAutoClick={isValueAutoClick}
        setIsValueAutoClick={() => {
          setIsValueAutoClick(true);
        }}
        isValueGrandMa={isValueGrandMa}
        setIsValueGrandMa={() => {
          setIsValueGrandMa(true);
        }}
        valueGrandMa={valueGrandMa}
        setValueGrandMa={(valueGrandMa) => {
          setValueGrandMa(valueGrandMa);
        }}
        priceValueClick={priceValueClick}
        priceAutoClick={priceAutoClick}
        priceGrandMa={priceGrandMa}
        score={score}
        totalScore={totalScore}
        setScore={(param) => {
          setScore(param);
        }}
        setPriceAutoClick={(newPrice) => {
          setPriceAutoClick(newPrice);
        }}
        setPriceValueClick={(newPrice) => {
          setPriceValueClick(newPrice);
        }}
        setPriceGrandMa={(newPrice) => {
          setPriceGrandMa(newPrice);
        }}
      />{" "}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("App"));
