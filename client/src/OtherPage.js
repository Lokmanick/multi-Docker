import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div>
            In some othe Page!
            <Link to='/'>Go back Home</Link>
        </div>
    );
};