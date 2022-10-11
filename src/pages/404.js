import React from "react";

import {Link} from "gatsby";

const NotFoundPage = () => (
    <div>
        <div className="bg-neutral-900 flex w-screen h-screen justify-center flex-col align-center text-center">
            <h3 className="text-white"> ERROR 404: Not Found </h3>
            <p className="text-white"> You don't have to go home, but you can't stay here. </p>
            <Link to="/" className="text-white"> Return Home? </Link>
        </div>
    </div>
);

export default NotFoundPage
