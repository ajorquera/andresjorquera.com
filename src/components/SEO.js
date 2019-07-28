import React from "react";
import { Helmet } from "react-helmet";

/**
 * TODO: use https://github.com/gatsbyjs/gatsby-starter-default/blob/master/src/components/seo.js#L15
 */

export default ({ title, description, image, domain }) => {
    let currentDomain = process.env.DEPLOY_URL || domain;
    const authority = `https://${currentDomain}`;
    const imageUrl = `${authority}${image}`;
    const url = `${authority}/index.html`;


    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }} 
        >
            <title>{title}</title>
    
            <meta name="description" content={description} />
            <meta name="image" content={imageUrl} />
            
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={imageUrl} />
    
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}

