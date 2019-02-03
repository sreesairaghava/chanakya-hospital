import React, { Component } from 'react';
import HightlightOne from '../../resources/assets/highlight1.jpg';
import HightlightTwo from '../../resources/assets/highlight2.jpg';
import HightlightThree from '../../resources/assets/highlight3.jpg';

class Highlights extends Component {
    render() {
        return (
            <div className="highlights-wrapper">
            
            <div className="item-1">
                <img src={HightlightOne} alt="doctor"/>
                <p>Test</p>
            </div>
            <div><img src={HightlightTwo} alt="doctor"/></div>
            <div><img src={HightlightThree} alt="doctor"/></div>
            

            </div>
        
        );
    }
}

export default Highlights;