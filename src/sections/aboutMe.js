import React from "react"
import avatar from "@images/jonathan.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from '@components/Section';
import { FormattedMessage } from "react-intl";

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

    return (
        <Section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 d-none d-md-block"> 
                        <img className="img-fluid" src={avatar} alt="avatar-2" />
                    </div>
                    <div className="col-md-7">
                        <h3 className="text-center text-md-left mb-0">Andrés Jorquera</h3>
                        <hr className="custom-name-border m-0 p-0 mb-3 mx-auto mx-md-0" />
                        <p className="text-justify">
                            <FormattedMessage id="sooooooo, who am I? I'm Andrés and I make software, the web kind, websites, apps and whatever you may think of. Through programming anything is possible. I'm the geekiest and friendliest person you will ever meet. Contact me so we can create cool things together. I'm one of the few people that actually loves what they do." />
                        </p>
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
