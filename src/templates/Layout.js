import React from "react"
import loadable from '@loadable/component';
import {injectIntl} from "react-intl";
import {changeLocale } from "gatsby-plugin-intl"


const NavBar = loadable(() => import('@sections/NavBar'));
const Bot    = loadable(() => import('@components/Bot'));

import SEO from '@components/SEO'
import '@sections/icons';

if(process.env.NODE_ENV === 'production') {
	require('../thirdParty');
}

const Layout = (props) => {
	const siteMetadata = props.siteMetadata || {};
	const {locale, formatMessage} = props.intl;
	
	const langs = [
		{code: 'es', label: 'SPANISH' }, 
		{code: 'en', label: 'ENGLISH' }
	].filter(lang => lang.code !== locale);

	const links = [
		{href: `/${locale}/`, label: formatMessage({id: 'HOME'})},
		{href: `/${locale}/#about`, label: formatMessage({id: 'ABOUT'})},
		{href: `/${locale}/#services`, label: formatMessage({id: 'services'})},
		{href: `/${locale}/blogs`, label: formatMessage({id: 'BLOG'})},
	];

	return (
		<div>
			<SEO {...siteMetadata} />
			<NavBar 
				name={siteMetadata.name} 
				langs={langs} 
				links={links} 
				onClickLang={lang => changeLocale(lang.code)}
			/>
			{props.children}
			<Bot />			
		</div>
	)
};

export default injectIntl(Layout);