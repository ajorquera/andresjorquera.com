import React from "react";
import { Helmet } from "react-helmet";

export default ({ title, description, image, domain }) => {
    const authority = `https://${domain}`;
    const imageUrl = `${authority}${image}`;

    return (
        <Helmet>
            <title>{title}</title>
    
            <meta name="description" content={description} />
            <meta name="image" content={imageUrl} />
            
            <meta property="og:description" content={description} />
            <meta property="og:url" content={authority} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={imageUrl} />
    
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    );
}

