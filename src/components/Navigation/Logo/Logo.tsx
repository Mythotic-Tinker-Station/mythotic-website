import React from 'react';

import classes from './Logo.module.css';

const logo: React.FunctionComponent<{
    logo: HTMLImageElement
    height: any
}> = (props) => {
    return <div className={classes.Logo} style={props.height}>
        INSERT LOGO HERE
    </div>
};

export default logo;