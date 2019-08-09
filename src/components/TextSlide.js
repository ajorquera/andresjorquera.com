import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "slick-carousel/slick/slick.css";

export default class TextSlide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoplay: true,
            arrows: false,
            infinity: true,
            vertical: true,
            focusOnSelect: true 
        }
    }

    _generateIcon({icon, color}) {
        return (<FontAwesomeIcon className="mx-1" color={color} icon={icon} />);
    }

    _generateSlide(slide) {
        const lines = slide.map(line => {
            let result;
            
            if(line && line.icon) {
                result = this._generateIcon(line);
            } else if (line && line.text) {
                result = line.text;
            } else if(typeof line === 'string') {
                result = line;
            }

            if(line && line.inline) {
                result = (<span>{result}</span>);
            } else {
                result = (<div className="d-md-block d-inline">{result}</div>);
            }

            return result;
        })

        return (
            <h3>
                {lines}
            </h3>
        );
    }

    render() {
        const slides = this.props.slides.map(this._generateSlide.bind(this));
        
        return (
            <Slider {...this.state}>
                {slides}
            </Slider>
        );
    }
};
