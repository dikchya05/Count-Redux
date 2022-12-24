import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeWidth,changeHeigth,changeBackgroundColor,changeCircle} from "./box.slice";


const Box = () => {
    const {width, backgroundColor, padding, height,borderRadius} =useSelector(state=>state.box)
    const dispatch = useDispatch()
  return (
      <>
    <div style={{
        width: width,
        padding: padding,
        backgroundColor: backgroundColor,
        height: height,
        borderRadius: borderRadius
    }}>
 
    </div>
    <input placeholder="width"
     onKeyUp={(e)=>dispatch(changeWidth(e.target.value))}/>
      <input placeholder="height"  onKeyUp={(e)=>dispatch(changeHeigth(e.target.value))}
  />
  <input placeholder ="color" onKeyUp={(e)=>dispatch(changeBackgroundColor(e.target.value))}/>
  <button onClick={(e)=> dispatch(changeCircle(e.target.value))}> Change to circle</button>
    </>

  );
};

export default Box;
