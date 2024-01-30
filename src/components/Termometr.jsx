import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/term/termSlice";

const Termometr = () => {
  const dispatch = useDispatch();
  const currentTemp = useSelector((store) => store.term.value);

  const termDown = () => {
    dispatch(decrement());
  };
  const termUp = () => {
    dispatch(increment());
  };
  const currentTempClass = (t) => {
    if (t < -10) return "t1";
    else if (t < -5) return "t2";
    else if (t < 0) return "t3";
    else if (t < 5) return "t4";
    else if (t < 10) return "t5";
    else if (t < 15) return "t6";
    else if (t < 20) return "t7";
    else if (t < 25) return "t8";
    else if (t < 30) return "t9";
    else return "t10";
  };

  return (
    <div 
    // className="term"
    className={"term " + currentTempClass(currentTemp)}
    >
      <div className="term_monitor">
        <p>{currentTemp}</p>
      </div>
      <div className="flex">
        <button className="term_buttons" onClick={termDown}>
          -
        </button>
        <button className="term_buttons" onClick={termUp}>
          +
        </button>
      </div>
    </div>
  );
};

export default Termometr;
