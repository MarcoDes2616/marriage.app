import React from 'react';
import '../../App.css';

const Curtain = ({ children, open }) => {
    
    return (
        <div className={open ? "curtain" : "curtain hide"} >
            {children}
        </div>
    );
};

export default Curtain;