import React from 'react';

import './homepage.style.scss';

import Directory from '../../component/directory/directory';
const homepage = () => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    );
}

export default homepage;