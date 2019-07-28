import React from "react"
import Banner from '../components/Banner'
import AboutMe from '../components/aboutMe'
import Why from '../components/why'
import Quote from '../components/quote'
import Layout from '../components/Layout'
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
	const siteMetadata = props.data.site.siteMetadata;
	const {name, email} = siteMetadata;
	siteMetadata.img = openGraphImg;

	return (
		<Layout siteMetadata={siteMetadata}>
			<Banner name={name} email={email} />
			<AboutMe name={name} />
			<Why />
			<Quote />
		</Layout>
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
}`;