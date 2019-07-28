import React from "react"
import SEO from '../components/SEO'
import Bot from '../components/Bot'

export default (props) => {
	return (
		<div>
			<SEO {...props.siteMetadata} />
			{props.children}
			<Bot />			
		</div>
	)
};