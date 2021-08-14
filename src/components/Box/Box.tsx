import React, { useEffect, useState } from "react";
import './box.css';

let prevText = "O";
const Box = (props:any) => {

    const [value, setValue] = useState("");

    // eslint-disable-next-line
    useEffect(() => {
        setValue("");
    }, [props.value]);

    const handleClick = () => {
        if(value !== "")
            return;

        prevText = prevText === "O" ? "X" : "O";
        setValue(prevText);
    }
    let boxStyle = "square-box " + (value === "O" ? "box-o" : value === "X" ? "box-x" : "");

    return <div className={boxStyle} onClick={handleClick}>{value}</div>;

}

export default Box;