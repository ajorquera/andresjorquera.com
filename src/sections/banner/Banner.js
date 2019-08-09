import React from "react"
import Button from 'react-bootstrap/Button'
import loadable from '@loadable/component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactGA from 'react-ga';
import BannerLink from '@components/BannerLink'


import avatar from "@images/jonathan.png"
const TextSlide = loadable(() => import('@components/TextSlide'))

//NOTE: fix for when changing img size. 
const hotfixStyle = {
	'overflow': 'hidden',
    'maxHeight': '65px'
}

let slides = [
	['I', {icon:'heart', color: 'red'}, 'creating apps'],
	['I\'m here to', {icon:'handshake'}, 'together'],
	['I', {icon:'lightbulb', color:'yellow'}, 'different'],
	['I', {icon:'wrench', color: 'gray', inline: true}, {text: 'with', inline: true}, 'transparency']
];

export default class Banner extends React.Component {
	hireMe() {
		const chat = document.querySelector('.rsc-float-button');
		chat.click();
		ReactGA.event({
			action: 'click',
			category: 'lead',
			value: 1
		});
	}
	render() {
		const links = {
			instagram: 'https://www.instagram.com/andres.codes/',
			linkedin: 'https://www.linkedin.com/in/andres-jorquera-mujica/',
			github: 'https://github.com/ajorquera'
		};
	
		const email = this.props.email;
		const name = this.props.name;
	
		return (
			<div className="custom-banner jumbotron jumbotron-fluid py-3 row">
				<div className="text-center container my-auto"><img className="img-fluid mx-auto d-block" src={avatar} alt="avatar" />
					<div className="mt-1 mt-md-5" style={hotfixStyle}>
						<span className="d-none d-md-inline mr-4">
							<BannerLink className="mx-1" link={links.instagram} icon='instagram' />
							<BannerLink className="mx-1" link={links.linkedin} icon='linkedin' />
						</span>
						<h1 className="text-white display-4 font-weight-bolder d-inline">{name}</h1>
						<span className="d-none d-md-inline ml-4">
							<BannerLink className="mx-1" link={'mailto:' + email + '?subject=Website Contact'} icon='envelope' /> 
							<BannerLink className="mx-1" link={links.github} icon='github' /> 	
						</span>
					</div>
					
					<TextSlide slides={slides} />
	
					<style type="text/css">
						{`
							.btn-outline-custom {
								border: 1px solid #FFFFFF;
								border-bottom: 3px solid #FFFFFF;
								background-color: transparent;
							}

							.banner-icon {
								color: #93c7ef;
								transition: color .4s ;
							}

							.btn-outline-custom:hover .banner-icon {
								color: #16A085
							}
	
							.btn-outline-custom:hover {
								border: 1px solid #16A085;
								border-bottom: 3px solid #16A085;
								color: #16A085;
							}
						`}
					</style>
	
					<Button onClick={this.hireMe.bind(this)} size="lg" variant="outline-custom" className="my-2" href="#contact" id="hire-me-button" role="button">
						Speak to&nbsp;
						<FontAwesomeIcon className="banner-icon" icon="robot" color="#93c7ef" />
					</Button>
				</div>
			</div>
		)
	}
};
