import React, { useState, useEffect } from "react";

// fonction qui calcul si il reste des cards hors du champs de l'ecran, et si
// il n'en reste qu'une, elle determine de combien il faut shift le caroussel
// pour que le bord droit de la dernière carte s'aligne avec la bord droit de l'écran.

const checkEnd = (array, currentCard) => {
  let lengthLeft = 0;
  for (let i = currentCard; i < array.length; i++) {
    lengthLeft = lengthLeft + Number(array[i].props.width) + 20;
  }
  if (lengthLeft - window.innerWidth * 0.8 < array[currentCard].props.width) {
    const toShift = lengthLeft - window.innerWidth * 0.8;
    return [true, toShift];
  } else return [false, 0];
};

/////////////////////////////////

const Caroussel = (props) => {
  const [position, setPosition] = useState(0);
  const [CurrentCard, setCurentCard] = useState(0);
  const [style, setStyle] = useState({
    transform: "translate(0, 0)",
  });
  const [styleBtnLeft, setStyleBtnLeft] = useState({
    visibility: "hidden",
  });
  const [styleBtnRigth, setStyleBtnRigth] = useState({
    display: "inline",
  });
  const [infoCheck, setInfoCheck] = useState([false, 0]);

  useEffect(() => {
    console.log("position : " + position);
    console.log("CurrentCard :" + CurrentCard);
    console.log(infoCheck);
  });

  const shiftRight = () => {
    setStyleBtnLeft({
      display: "inline",
    });
    if (infoCheck[0]) {
      console.log("la postion devrai etre : " + (position - infoCheck[1]));
      setStyle({
        transform: `translate(${position - infoCheck[1]}px, 0)`,
        animation: "3s ease-in 1s infinite reverse both running slidein",
      });
      setStyleBtnRigth({
        visibility: "hidden",
      });
      setPosition(position - infoCheck[1]);
    } else {
      setStyle({
        transform: `translate(${
          position - Number(props.Cards[CurrentCard].props.width) - 20
        }px, 0)`,
      });
      setPosition(position - Number(props.Cards[CurrentCard].props.width) - 20);
    }
    setInfoCheck(checkEnd(props.Cards, CurrentCard + 1));
    setCurentCard(CurrentCard + 1);
  };

  const shiftLeft = () => {
    if (infoCheck[0] && styleBtnRigth.visibility === "hidden") {
      let toShift = Number(checkEnd(props.Cards, CurrentCard - 1)[1]);
      setStyle({
        transform: `translate(${position + toShift}px, 0)`,
      });
      setPosition(position + toShift);
    } else {
      setStyle({
        transform: `translate(${
          position + Number(props.Cards[CurrentCard - 1].props.width) + 20
        }px, 0)`,
      });
      setPosition(
        position + Number(props.Cards[CurrentCard - 1].props.width) + 20
      );
    }
    setStyleBtnRigth({
      display: "inline",
    });
    if (props.Cards[CurrentCard - 2] === undefined) {
      setStyleBtnLeft({
        visibility: "hidden",
      });
    }
    setInfoCheck(checkEnd(props.Cards, CurrentCard - 1));
    setCurentCard(CurrentCard - 1);
  };

  return (
    <div className="">
      <div className="">
        <strong>{props.title[0]}</strong>
        {props.title[1]}
      </div>
      <div className="">
        <button className="" style={styleBtnLeft} onClick={shiftLeft}>
          <div className="" id="left"></div>
        </button>
        <div className="">
          <div className="" style={style}>
            {props.Cards}
          </div>
        </div>
        <button className="" style={styleBtnRigth} onClick={shiftRight}>
          <div className="" id="right"></div>
        </button>
      </div>
    </div>
  );
};

export default Caroussel;
