import React from 'react';
import {Link} from 'react-router-dom';

// Linking between routes : add an event listener for our links, then we're going to override the brower's default behavior
// <a href="/">Go Home</a>
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;