import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BonusCookies } from "./component/BonusCookies";
import { useInterval } from "react-use-timeout";

import { CookiesScors } from "./component/CookiesScors";

const App = (props) => {
  const [score, setScore] = useState(0);
  const [valueClick, setValueClick] = useState(1);
  const [valueAutoClick, setValueAutoClick] = useState(0);
  const [isValueAutoClick, setIsValueAutoClick] = useState(false);
  const [priceValueClick, setPriceValueClick] = useState(10);
  const [priceAutoClick, setPriceAutoClick] = useState(50);

  if (isValueAutoClick) {
    useInterval(setScore(score + valueAutoClick), 1000);
  }

  return (
    <div>
      <CookiesScors
        score={score}
        setScore={() => {
          setScore(score + valueClick);
        }}
      />
      <BonusCookies
        valueClick={valueClick}
        setValueClick={() => {
          setValueClick(valueClick + 1);
        }}
        valueAutoClick={valueAutoClick}
        setValueAutoClick={() => {
          setValueAutoClick(valueAutoClick + 1);
        }}
        isValueAutoClick={isValueAutoClick}
        setIsValueAutoClick={() => {
          setIsValueAutoClick(true);
        }}
        priceValueClick={priceValueClick}
        priceAutoClick={priceAutoClick}
        score={score}
        setScore={(param) => {
          setScore(param);
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("App"));
