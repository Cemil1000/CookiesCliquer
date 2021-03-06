import React from "react";

export const BonusCookies = (props) => {
  const {
    valueClick,
    setValueClick,
    valueAutoClick,
    setValueAutoClick,
    setIsValueAutoClick,
    setIsValueGrandMa,
    priceValueClick,
    priceAutoClick,
    score,
    setScore,
    totalScore,
    setPriceAutoClick,
    setPriceValueClick,
    valueGrandMa,
    setValueGrandMa,
    priceGrandMa,
    setPriceGrandMa
  } = props;

  function addBonusClick() {
    setValueClick(valueClick +1);
    setScore(score - priceValueClick);
    setPriceValueClick(priceValueClick +1)
  }

  function setAutoClick() {
    if (valueAutoClick === 0) {
      setIsValueAutoClick();
    }
    setValueAutoClick(valueAutoClick + 1);
    setScore(score - priceAutoClick);
    setPriceAutoClick(priceAutoClick*2)
  }

  function setGrandMa() {
    if (valueGrandMa === 0) {
      setIsValueGrandMa();
    }
    setValueGrandMa(valueGrandMa + 2);
    setScore(score - priceGrandMa);
    setPriceGrandMa(priceGrandMa*2)
  }

  const btnValueClick =
    score >= priceValueClick ? (
      <button onClick={() => { addBonusClick(); }}> {priceValueClick} </button>
    ) : (
      <button disabled> {priceValueClick} </button>
    );

  const btnAutoClick =
    score >= priceAutoClick ? (
      <button onClick={() => { setAutoClick(); }}> {priceAutoClick} </button>
    ) : (
      <button disabled> {priceAutoClick} </button>
    );

  const btnGrandMa =
    score >= priceGrandMa ? (
      <button onClick={() => { setGrandMa(); }}> {priceGrandMa} </button>
    ) : (
      <button disabled> {priceGrandMa} </button>
    );


  return (
    <>
      {btnValueClick}
      {btnAutoClick}
      {totalScore>=500 && btnGrandMa}
    </>
  );
};
