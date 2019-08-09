import React from "react"
import { graphql } from 'gatsby'

import Banner from '@sections/banner'
import AboutMe from '@sections/aboutMe'
import Why from '@sections/why'
import Quote from '@sections/quote'
import Layout from '@components/Layout'

import openGraphImg from '@images/openGraphImg.png'


export default (props) => {
	const siteMetadata = props.data.site.siteMetadata;
	const {name, email} = siteMetadata;
	siteMetadata.image = openGraphImg;

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