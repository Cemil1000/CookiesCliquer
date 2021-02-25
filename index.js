import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { BonusCookies } from "./component/BonusCookies";
import { useInterval } from "react-use-timeout";

import { CookiesScors } from "./component/CookiesScors";

const App = (props) => {
  const [score, setScore] = useState(0);
  const [valueClick, setValueClick] = useState(1);
  const [valueAutoClick, setValueAutoClick] = useState(0);
  const [valueGrandMa, setValueGrandMa] = useState(0);
  const [isValueAutoClick, setIsValueAutoClick] = useState(false);
  const [priceValueClick, setPriceValueClick] = useState(10);
  const [priceAutoClick, setPriceAutoClick] = useState(50);
  const [priceGrandMa, setPriceGrandMa] = useState(10);

  const test = useCallback(() => {
    setScore(score + valueAutoClick);
  }, [score, valueAutoClick]);
  const timeout = useInterval(test, 1000);

  if (isValueAutoClick) {
    timeout.start();
  }

  return (
    <div>
      <CookiesScors
        score={score}
        setScore={(score) => {
          setScore(score);
        }}
        valueClick={valueClick}
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
        valueGrandMa={valueGrandMa}
        setValueGrandMa={(valueGrandMa) => {
          setValueGrandMa(valueGrandMa);
        }}
        priceValueClick={priceValueClick}
        priceAutoClick={priceAutoClick}
        priceGrandMa={priceGrandMa}
        score={score}
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
