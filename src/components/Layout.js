import React from "react"
import SEO from '../components/SEO'
import loadable from '@loadable/component'
const Bot = loadable(() => import('./Bot'));

export default (props) => {
	return (
		<div>
			<SEO {...props.siteMetadata} />
			{props.children}
			<Bot />			
		</div>
	)
};