import React from "react";

export const BonusCookies = (props) => {
  const {
    valueClick,
    setValueClick,
    valueAutoClick,
    setValueAutoClick,
    setIsValueAutoClick,
    priceValueClick,
    priceAutoClick,score,setScore
  } = props;

  function setAutoClick() {
    if (valueAutoClick === 0) {
      setIsValueAutoClick();
    }
    setValueAutoClick();
    setScore(score-priceAutoClick)
  }

  function addBonusClick() {
    setValueClick();
    setScore(score-priceValueClick)
  }
  
  const btnValueClick= score>= priceValueClick ?  (<button
    onClick={() => {
      addBonusClick()
    }}
  >
    x2
  </button>) : (<button disabled >
    x2
  </button>)

const btnAutoClick= score>= priceAutoClick ?  (<button
    onClick={() => {
      setAutoClick();
    }}
  >
    +1
  </button>) : (<button disabled >
    +1
  </button>)

  return (
    <>
      {btnValueClick}
    {btnAutoClick}
    </>
  );
};
