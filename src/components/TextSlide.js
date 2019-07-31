import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default () => {
    
    var settings = {
        autoplay: true,
        arrows: false,
        infinity: true,
        vertical: true,
        focusOnSelect: true 
    };

    return (
        <Slider {...settings}>
            <div>
                <h3> 
                    I&nbsp;
                    <span className="d-md-block">
                        <FontAwesomeIcon color="red" icon="heart" />
                    </span>&nbsp; creating apps
                </h3>
            </div>
            <div>
                <h3> 
                    I&nbsp;
                    <span className="d-md-block">
                        <FontAwesomeIcon color="#16A085" icon="code" />
                    </span>&nbsp; fast 
                </h3>
            </div>
            <div>
                <h3> 
                    I&nbsp;
                    <span className="d-md-block">
                        <FontAwesomeIcon icon="graduation-cap" />
                    </span>&nbsp; anyone
                </h3>
            </div>
            <div>
                <h3> 
                    I'll&nbsp;
                    <span className="d-md-block">
                        <FontAwesomeIcon color="#88fa0b" icon="handshake" />
                    </span>&nbsp;reach your goals
                </h3>
            </div>
        </Slider>
    );
}
