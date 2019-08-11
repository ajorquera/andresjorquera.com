import React from 'react';
import Section from '@components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import macImg from '@images/imac.png'
import trelloImg from '@images/trello.png'

export default () => {
    const technologies = [
        {label: 'Angular', link: 'https://angular.io/'},
        {label: 'React', link: 'https://reactjs.org/'},
        {label: 'Serverless', link: 'https://en.wikipedia.org/wiki/Serverless_computing'},
        {label: 'Google Cloud', link: 'https://cloud.google.com/'},
        {label: 'CI/CD', link: 'https://docs.gitlab.com/ee/ci/introduction/'},
    ].map(item => `<a class="text-light font-weight-bold" href="${item.link}">${item.label}</a>`).join(',  ');

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
            title: 'Continuos Planning', 
            description: 'We work hand to hand to know the present and future of your product.', 
            icon: 'list'
        },
        {
            title: 'Translation Bussiness / Technical', 
            description: 'We explain with detail how to reflect bussiness specifications to technical requirements', 
            icon: 'briefcase'
        },
        {
            title: 'Latest technologies', 
            description: `We use latest tech to build our apps. ${technologies} some of the tools we actually use`, 
            icon: 'rocket'
        },
        {
            title: 'Cost ≈ $0', 
            description: 'Current market and technology allows for maintance cost be to a minimum, and in some cases for FREE.', 
            icon: 'dollar-sign'
        },
    ]

    const _setHtml = (html) => {
        return {__html: html};
    };


    return (
        <Section color="green" id="services">
            <h2 className="font-weight-bolder text-center">Services</h2>
            <blockquote class="blockquote text-center">
                <p class="mb-0 h4"><em>Internet is my canvas where I create my own paintings</em></p>
            </blockquote>
            <div className="row">
                <div className="col-12 col-md-6">
                    <ul className="list-group list-group-flush">
                        {services.map((service, i) => (
                            <li key={i} className="list-group-item bg-transparent border-0 px-0">
                                <div className="row ">
                                    <div className="col-2 align-self-center text-center">
                                        <FontAwesomeIcon color="#34495E" size="4x" icon={service.icon} />
                                    </div>
                                    <div className="col-10">
                                        <h4>{service.title}</h4>
                                        <p dangerouslySetInnerHTML={_setHtml(service.description)}></p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 pt-5">
                    <div style={sliderStyle}>
                        <img src={trelloImg} className="img-fluid" />
                    </div>
                </div>
            </div>
        </Section>
    );
}