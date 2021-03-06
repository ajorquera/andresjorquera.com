import React from "react"
import { graphql } from 'gatsby'
import loadable from '@loadable/component';
import {FormattedMessage} from 'react-intl';

import Banner from '@sections/banner'
import Layout from '@templates/Layout'

import openGraphImg from '@images/openGraphImg.png'

const Services = loadable(() => import('@sections/services'));
const AboutMe  = loadable(() => import('@sections/aboutMe'));
const Why      = loadable(() => import('@sections/why'));
const Quote    = loadable(() => import('@sections/quote'));


export default (props) => {
	const siteMetadata = props.data.site.siteMetadata;
	const {name, email} = siteMetadata;
	siteMetadata.image = openGraphImg;

	return (
		<Layout siteMetadata={siteMetadata}>
			<Banner name={name} email={email} />
			<AboutMe name={name} />
			<Why />
			<Quote 
				quote={<FormattedMessage id="People don't buy what you do, they buy why you do it" />} 
				author="Simon Sinek"
			/>
			<Services />
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