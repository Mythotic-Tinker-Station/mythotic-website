import React, { Component, Fragment } from 'react';
import Box from '@material-ui/core/Box'

import classes from './Home.module.css'
import Banner from '../../components/UI/Banner/Banner';

class HomePage extends Component {
    
    render() {
        return (
            <Fragment>
                <Box className={classes.bannerbox}>
                    <Banner imgsrc=''/>
                </Box>
                <Box>
                    NewsBox
                </Box>
            </Fragment>
        )
    }
}

export default HomePage;