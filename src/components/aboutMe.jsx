import React from "react"
import avatar from "../images/jonathan.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

	<section class="custom-about-me custom-section" id="about">
    <div class="container">
        <div class="row">
            <div class="col-md-2 d-none d-md-block"> 
                <img class="img-fluid" src={avatar} alt="avatar-2" />
            </div>
            <div class="col-md-7">
                <h3 class="text-center text-md-left mb-0">Andrés Jorquera</h3>
                <hr class="custom-name-border m-0 p-0 mb-3 mx-auto mx-md-0" />
                <p class="text-justify">Sooooooo, who am I? I'm Andrés and I make software, the web kind, websites, apps and whatever you may think of. Through programming anything is possible. I'm the geekiest and friendliest person you will ever meet. Contact me so we can
                    create cool things together. I'm one of the few people that actually loves what they do.
                </p>
                <div class="card mt-5 bg-dark d-md-block d-none">
                    <div class="card-header ">A RANDOM THING</div>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">Missing feature</h6>
                        <p class="card-text"> 
                            <span>You can only see this on mobile. There was an empty space on desktop so I fill it with this card. Ill make something cool. &nbsp;</span>
                            <a class="badge badge-warning d-none" href="#/">Make it go away</a>
                        </p>
                        <a class="card-link" href="https://www.randomlists.com/random-random-lists" target="_blank" rel="noopener noreferrer">
                            More random sh*t
                        </a>
                    </div>
                </div>
            </div>
            <div class="offset-md-0 col-md-3 offset-1 col-6">
                <div class="timeline">
                    {timeline.map(event => (
                        <div class="event">
                            <div class="custom-timeline-icon">
                                <small class="date">{event.year}</small>
                                <span class="fa-layers fa-fw custom-text-green-light ml-2">
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
</section>
)
    }
