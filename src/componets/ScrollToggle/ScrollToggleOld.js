import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './ScrollToggle.module.css';
import { IoInfinite } from "react-icons/io5";
import App from '../../App';


class ScrollToggle extends Component {
    
    state = {
        unlessScroll: false
    };

    // componentDidUpdate() {
    //     this.props.unlessScroll(this.state.unlessScroll);
    // }

    toggleScroll = () => {
        this.setState(({ unlessScroll }) => (
            { unlessScroll: !unlessScroll }
        ));
        this.props.unlessScroll(!this.state.unlessScroll);
    };

    render() {

        console.log('state.unlessScroll in ScrollToggle: ', this.state.unlessScroll)
        
        const { unlessScroll } = this.state;
        const { toggleScroll } = this;
        return (
            <div className={s.scrollToggle}>
                <span className={s.scrollName}>UNLESS SCROLL</span>
                <div className={s.buttonFrame}>
                    <span className={s.itemText}>ON</span>
                    <span className={s.itemText}>OFF</span>
                    <button type="button" className={s.scrollButton} style={!unlessScroll?{left: "2px"}:{right: "2px"}} onClick={toggleScroll}><IoInfinite/></button>
                </div>     
            </div>
        )
    }

};

export default ScrollToggle;