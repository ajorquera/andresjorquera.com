import React from "react";
import { Helmet } from "react-helmet";

export default ({ title, description, img, authority }) => (
    <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="image" content={img} />
        
        <meta property="og:description" content={description} />
        <meta property="og:url" content={authority} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:img" content={img} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={img} />
    </Helmet>
);
