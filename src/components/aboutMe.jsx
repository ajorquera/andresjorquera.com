import React from "react"
import avatar from "../images/jonathan.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from './Section';

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
            label: 'Entreprenuer',
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
	<Section>
        <div className="container">
            <div className="row">
                <div className="col-md-2 d-none d-md-block"> 
                    <img className="img-fluid" src={avatar} alt="avatar-2" />
                </div>
                <div className="col-md-7">
                    <h3 className="text-center text-md-left mb-0">Andrés Jorquera</h3>
                    <hr className="custom-name-border m-0 p-0 mb-3 mx-auto mx-md-0" />
                    <p className="text-justify">Sooooooo, who am I? I'm Andrés and I make software, the web kind, websites, apps and whatever you may think of. Through programming anything is possible. I'm the geekiest and friendliest person you will ever meet. Contact me so we can
                        create cool things together. I'm one of the few people that actually loves what they do.
                    </p>
                    <div className="card mt-5 bg-dark d-md-block d-none">
                        <div className="card-header ">A RANDOM THING</div>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Missing feature</h6>
                            <p className="card-text"> 
                                <span>You can only see this on mobile. There was an empty space on desktop so I fill it with this card. Ill make something cool. &nbsp;</span>
                                <a className="badge badge-warning d-none" href="#/">Make it go away</a>
                            </p>
                            <a className="card-link" href="https://www.randomlists.com/random-random-lists" target="_blank" rel="noopener noreferrer">
                                More random sh*t
                            </a>
                        </div>
                    </div>
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
                                <div>{event.label}</div>
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
