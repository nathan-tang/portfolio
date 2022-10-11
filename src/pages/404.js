import React from "react";

import {Link} from "gatsby";

const NotFoundPage = () => (
    <div>
        <div className="align-center">
            <h3 className="homepage-h3"> ERROR 404: Not Found </h3>
            <p> You don't have to go home, but you can't stay here. </p>
            <Link to="/"> Return Home </Link>
        </div>
    </div>
);

export default NotFoundPage
