import React from 'react';
import { Helmet } from 'react-helmet-async';

export const HelmetCP = ({ pageTitle, pageDescription, pageKeywords, canonicalURL  }) => {
    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <link rel="canonical" href={`https://gsquaredfunding.com/${canonicalURL}`} />
        </Helmet>
    )
};
