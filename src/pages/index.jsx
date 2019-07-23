import React from "react"
import Banner from '../components/Banner'
import Bot from '../components/Bot'
import AboutMe from '../components/aboutMe'
import Why from '../components/why'
import Quote from '../components/quote'
import NavBar from '../components/NavBar'
import {Helmet} from "react-helmet";
import openGraphImg from '../images/openGraphImg.png'
import { graphql } from 'gatsby'
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


export default (props) => {

	const {
		description, 
		domain, 
		title, 
		name, 
		email
	} = props.data.site.siteMetadata;

	const authority = `https://${domain}`;

	let img = openGraphImg;
	if(process.env.NODE_ENV === 'production') {
		img = `${authority}${openGraphImg}`;
	}


	return (
		<div>
			<Helmet>
				<title>{title}</title>

				<meta name="description" content={description} />
				<meta name="image" content={img} />
				
				<meta property="og:description" content={description} />
				<meta property="og:url" content={authority} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:img" content={img} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={img} />
			</Helmet>

			<NavBar name={name} />
			<Banner name={name} email={email} />
			<AboutMe name={name} />
			<Why />
			<Quote />
			<Bot />
		</div>
	)
};

export const query = graphql`query {
    site: site {
        siteMetadata {
            title,
            email,
            name, 
            description,
            domain
        }
	}
	links: allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
		edges {
			node {
				name
			}
		}
	}
}`;