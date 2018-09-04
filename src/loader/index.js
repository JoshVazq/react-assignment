import React from 'react';
import './styles.css';

const Loader = () => (
    <div className="w-100 h-100 absolute flex">
        <div className="loader">
            <div className="bg-gray" />
            <div className="bg-green" />
            <div className="bg-blue" />
        </div>
    </div>
);

export default Loader;
