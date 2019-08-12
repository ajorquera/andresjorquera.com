import React from "react"
import loadable from '@loadable/component';

import SEO from '@components/SEO'
import NavBar from '@sections/NavBar'

import '@sections/icons';

const Bot = loadable(() => import('@components/Bot'));

if(process.env.NODE_ENV === 'production') {
	require('../thirdParty');
}

export default (props) => {
	const siteMetadata = props.siteMetadata || {};

	return (
		<div>
			<SEO {...siteMetadata} />
			<NavBar name={siteMetadata.name} />
			{props.children}
			<Bot />			
		</div>
	)
};