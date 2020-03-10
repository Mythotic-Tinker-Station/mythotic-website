import React, { Component, Fragment } from 'react';
import Box from '@material-ui/core/Box'

import classes from './Home.module.css'

class HomePage extends Component {
    
    render() {
        return (
            <Fragment>
                <Box className={classes.bannerbox}>
                    BannerBox
                </Box>
                <Box>
                    NewsBox
                </Box>
            </Fragment>    
        )
    }
}

export default HomePage;