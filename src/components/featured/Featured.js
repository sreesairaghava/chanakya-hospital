import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navigationbar from '../header/NavigationBar'
import {Carousel} from 'react-responsive-carousel';
import One from '../../resources/assets/one.jpg';
import Two from '../../resources/assets/two.jpg';
import Three from '../../resources/assets/three.jpg';
import Four from '../../resources/assets/four.jpg';
import Five from '../../resources/assets/five.jpg';
class Featured extends Component {
    render() {
        return (
            <div>
                <Navigationbar></Navigationbar>
                <Carousel 
                autoPlay={true}
                infiniteLoop={true}
                showArrows={false}
                interval={1000}
                showThumbs={false}
                transitionTime={100}
                stopOnHover={true}
                showStatus={false}
                >
                    <div>
                        <img src={One} alt="doctor"/>
                        <p className="lengend">Testing</p>
                    </div>
                    <div>
                        <img src={Two} alt="doctor"/>
                    </div>
                    <div>
                        <img src={Three} alt="doctor"/>
                    </div>
                    <div>
                        <img src={Four} alt="doctor"/>
                    </div>
                    <div>
                        <img src={Five} alt="doctor"/>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Featured;