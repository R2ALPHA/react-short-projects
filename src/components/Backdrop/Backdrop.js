import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {

    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClose'].join(" ");

    return <div className={cssClasses}></div>
};

export default Backdrop;