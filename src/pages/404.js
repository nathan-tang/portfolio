import React from "react";
import './css/404.css';

import SEO from "../components/seo";

const NotFoundPage = () => (
    <div>
        <SEO title="404: Not found" />
        <div className="align-center">
            <h3 className="homepage-h3"> ERROR 404: Not Found </h3>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    </div>
);

export default NotFoundPage
