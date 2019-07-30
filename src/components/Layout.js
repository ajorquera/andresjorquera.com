import React from "react"
import SEO from '../components/SEO'
import loadable from '@loadable/component'
import '../sections/icons';

const Bot = loadable(() => import('./Bot'));

if(process.env.NODE_ENV === 'production') {
	require('../thirdParty');
}

export default (props) => {
	return (
		<div>
			<SEO {...props.siteMetadata} />
			{props.children}
			<Bot />			
		</div>
	)
};