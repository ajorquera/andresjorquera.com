import React from "react"
import Banner from '../components/Banner'
import Bot from '../components/Bot'
import AboutMe from '../components/aboutMe'
import Why from '../components/why'
import Quote from '../components/quote'
import {Helmet} from "react-helmet";
import openGraphImg from '../images/openGraphImg.png'

import '../components/analytics';

import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
	faQuoteLeft,
	faEnvelope, 
	faHeart, 
	faBolt, 
	faCircle,
	faCode, 
	faLightbulb, 
	faFlask, 
	faFileContract, 
	faGlobe
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faInstagram, 
	faLinkedin, 
	faGithub, 
	faEnvelope, 
	faLightbulb, 
	faHeart, 
	faBolt, 
	faCircle, 
	faCode, 
	faFlask, 
	faFileContract, 
	faGlobe,
	faQuoteLeft
);

const title = 'Andres Jorquera - Freelancer'
const description = 'Awesome Web developer';
const img = openGraphImg;
const url = 'andresjorquera.com';

export default () => (
	
	<div>
		<Helmet>
			<title>{title}</title>

			<meta name="description" content={description} />
			<meta name="image" content={img} />
			
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={img} />
    	</Helmet>
		<Banner />
		<AboutMe />
		<Why />
		<Quote />
		<Bot />
	</div>
)
