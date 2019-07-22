import React from 'react';

export default () => (
    <div></div>
);

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
	posts: allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
		edges {
			node {
				name
			}
		}
	}
}`;