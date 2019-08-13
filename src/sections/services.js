import React from 'react';
import Section from '@components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import macImg from '@images/imac.png'
import trelloImg from '@images/trello.png'
import { FormattedMessage } from "react-intl"

export default () => {
    const technologies = [
        {label: 'Angular', link: 'https://angular.io/'},
        {label: 'React', link: 'https://reactjs.org/'},
        {label: 'Serverless', link: 'https://en.wikipedia.org/wiki/Serverless_computing'},
        {label: 'Google Cloud', link: 'https://cloud.google.com/'},
        {label: 'CI/CD', link: 'https://docs.gitlab.com/ee/ci/introduction/'},
    ].map(item => `<a className="text-light font-weight-bold" href="${item.link}">${item.label}</a>`).join(',  ');

    const sliderStyle = {
        background: `url(${macImg})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        padding:'8% 4.3%'

    };

    const services = [
        {
            title: (<FormattedMessage id="Continuos Planning" />), 
            description: (<FormattedMessage id="We work hand to hand to know the present and future of your product." />), 
            icon: 'list'
        },
        {
            title: (<FormattedMessage id="Translation Business / Technical" />), 
            description: (<FormattedMessage id="We explain with detail how to reflect business specifications to technical requirements." />), 
            icon: 'briefcase'
        },
        {
            title: (<FormattedMessage id="Latest technologies" />), 
            description: (<FormattedMessage id="We use the latest technologies to build our apps. Angular, React, Serverless, Google Cloud, CI/CD are some of the tools we actually use." />), 
            icon: 'rocket'
        },
        {
            title: (<FormattedMessage id="Cost ≈ $0" />), 
            description: (<FormattedMessage id="Current market and technology allows for maintance cost be to a minimum, and in some cases for FREE." />), 
            icon: 'dollar-sign'
        },
    ]

    const _setHtml = (html) => {
        return {__html: html};
    };


    return (
        <Section color="green" id="services">
            <h2 className="font-weight-bolder text-center text-capitalize"><FormattedMessage id="services"/></h2>
            <blockquote className="blockquote text-center">
                <p className="mb-0 h4"><em>
                    <FormattedMessage id="Internet is my canvas where I create my own paintings" />
                </em></p>
            </blockquote>
            <div className="row">
                <div className="col-12 col-md-6">
                    <ul className="list-group list-group-flush">
                        {services.map((service, i) => (
                            <li key={i} className="list-group-item bg-transparent border-0 px-0">
                                <div className="row ">
                                    <div className="d-none d-sm-block col-2 align-self-center text-center">
                                        <FontAwesomeIcon color="#34495E" size="4x" icon={service.icon} />
                                    </div>
                                    <div className="col-12 col-sm-10">
                                        <h4 className="text-sm-left text-center">{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 d-none d-md-block pt-5">
                    <div style={sliderStyle}>
                        <img src={trelloImg} className="img-fluid" />
                    </div>
                </div>
            </div>
        </Section>
    );
}