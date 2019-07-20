import React from "react"
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactGA from 'react-ga';

import avatar from "../../images/jonathan.png"

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
	
		const email = 'jorquera.ad@gmail.com';
	
		return (
			<div className="custom-banner jumbotron jumbotron-fluid py-3 row">
				<div className="text-center container my-auto"><img className="img-fluid mx-auto d-block" src={avatar} alt="avatar" />
					<div className="mt-1 mt-md-5">
						<ul className="brands brands-inline d-none d-md-inline mr-4">
							<li><a href={links.instagram} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon color="white" icon={['fab', 'instagram']} />
							</a></li>
							<li><a href={links.linkedin} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon color="white" icon={['fab', 'linkedin']} />
							</a></li>
						</ul>
						<h1 className="text-white display-4 font-weight-bolder d-inline">Andrés Jorquera</h1>
						<ul className="list-inline brands brands-inline d-none d-md-inline ml-4">
							<li><a href={'mailto:' + email + '?subject=Website Contact'}>
								<FontAwesomeIcon color="white" icon="envelope" />		
							</a></li>
							<li><a href={links.github} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon color="white" icon={['fab', 'github']} />
							</a></li>
						</ul>
					</div>
					<div className="carousel slide vertical mt-2 my-md-4" data-ride="carousel">
						<div className="carousel-inner">
							<div className="item active">
								<h3> I <span className="d-md-block">
									<FontAwesomeIcon color="red" icon="heart" />
								</span>&nbsp;programming</h3>
							</div>
						</div>
					</div>
	
					<style type="text/css">
						{`
							.btn-outline-custom {
								border: 1px solid #FFFFFF;
								border-bottom: 3px solid #FFFFFF;
								background-color: transparent;
							}
	
							.btn-outline-custom:hover {
								border: 1px solid #16A085;
								border-bottom: 3px solid #16A085;
								color: #16A085;
							}
						`}
					</style>
	
					<Button size="lg" variant="outline-custom" className="my-1" href="#about">
						Know me better
					</Button>
					<Button onClick={this.hireMe.bind(this)} size="lg" variant="outline-custom" className="my-2" href="#contact" id="hire-me-button" role="button">
						<FontAwesomeIcon icon="bolt" />
						&nbsp;Hire me
					</Button>
				</div>
			</div>
		)
	}
};
