import React from 'react';
import s from './ScrollToggle.module.css';
import { IoInfinite } from "react-icons/io5";

const ScrollToggle = ({toggleScroll, position}) => {

    return (
        <div className={s.scrollToggle}>
            <span className={s.scrollName}>ENDLESS SCROLL</span>
            <div className={s.buttonFrame}>
                <span className={s.itemText}>ON</span>
                <span className={s.itemText}>OFF</span>
                <button type="button" className={s.scrollButton} style={!position ? { left: "2px" } : { right: "2px" }} onClick={() => toggleScroll(!position)}><IoInfinite /></button>
            </div>
        </div>
    ); 
};

export default ScrollToggle;