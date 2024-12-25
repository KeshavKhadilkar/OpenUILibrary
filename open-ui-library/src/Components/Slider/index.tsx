import { useEffect, useRef, useState } from "react";
import { ISliderProps } from "../../Interface/ISlider";
import "./index.css";

export const Slider: React.FC<ISliderProps> = (props) => {
  const [selected, setselected] = useState<number>(props.min);
  useEffect(() => {
    setselected(props.currentSelected);
  }, [props.currentSelected]);
  const sliderChnage = (e: any) => {
    setselected(e.target.value);
  };
  return (
    <>
      <div className="slide-container">
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={selected}
          onChange={sliderChnage}
          className={`slide`+ (props.vertical && ' vertical')}
          id="myRange"
        />
        <div className="slide-value">{selected}</div>
      </div>
    </>
  );
};
