import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default () => {
    
    var settings = {
        autoplay: true,
        arrows: false,
        vertical: true,
        focusOnSelect: true 
    };

    return (
        <Slider {...settings}>
            <div>
                <h3> 
                    I 
                    <span className="d-md-block">
                        <FontAwesomeIcon color="red" icon="heart" />
                    </span>&nbsp; creating apps
                </h3>
            </div>
            <div>
                <h3> 
                    I 
                    <span className="d-md-block">
                        <FontAwesomeIcon color="green" icon="code" />
                    </span>&nbsp; fast 
                </h3>
            </div>
        </Slider>
    );
}
