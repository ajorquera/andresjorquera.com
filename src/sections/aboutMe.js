import React, {useState} from "react"
import avatar from "@images/jonathan.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from '@components/Section';
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import {Collapse, Button} from 'react-bootstrap';

export default () => {
    const timeline = [
        {
            year: '2013',
            label: 'Graduated Chemist',
            flags: '🇻🇪',
            icon: 'flask'
        },
        {
            year: '2014',
            label: 'Software Engineer',
            flags: '🇬🇧',
            icon: 'code'
        },
        {
            year: '2017',
            label: 'Entrepreneur',
            flags: '🇹🇭🇲🇾🇮🇩',
            icon: 'lightbulb'
        },
        {
            year: '2018',
            label: 'Contractor',
            flags: '🇪🇸',
            icon: 'file-contract'
        },
        {
            year: '2020',
            label: 'Freelancer',
            flags: '🤷🏻',
            icon: 'globe'
        },
    ];

    const [open, setOpen] = useState(false);
    const clickableStyle = {cursor: 'pointer'}

    return (
        <Section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 d-none d-md-block"> 
                        <img className="img-fluid" src={avatar} alt="avatar-2" />
                    </div>
                    <div className="col-md-7">
                        <h3 className="text-center text-md-left mb-0"><FormattedHTMLMessage id="aboutMeTitle" /></h3>
                        <hr className="custom-name-border m-0 p-0 mb-3 mx-auto mx-md-0" />
                        <p className="text-justify">
                            <FormattedHTMLMessage id="aboutMeSummary" />
                        </p>
                        <h3
                            onClick={() => setOpen(!open)}
                            aria-controls="more-about-me-collapse-text"
                            aria-expanded={open}
                            style={clickableStyle}
                        >
                            <FormattedHTMLMessage id="moreAboutMeTitle" /><span>&nbsp;{open ? '🤯': '😁'}</span>
                        </h3>
                        <Collapse in={open}>
                            <div id="more-about-me">
                                <FormattedHTMLMessage id="moreAboutMe"></FormattedHTMLMessage>
                                <img className="img-fluid my-3" src="http://giphygifs.s3.amazonaws.com/media/FnGJfc18tDDHy/giphy.gif"></img>
                            </div>
                        </Collapse>
                    </div>
                    <div className="offset-md-0 col-md-3 offset-1 col-6">
                        <div className="timeline">
                            {timeline.map((event, index) => (
                                <div key={index} className="event">
                                    <div className="custom-timeline-icon">
                                        <small className="date">{event.year}</small>
                                        <span className="fa-layers fa-fw custom-text-green-light ml-2">
                                            <FontAwesomeIcon icon="circle" transform="grow-16" />
                                            <FontAwesomeIcon icon={event.icon} inverse />
                                        </span>
                                    </div>
                                    <div>
                                        <FormattedMessage id={event.label} /> 
                                    </div>
                                    <div>{event.flags}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
