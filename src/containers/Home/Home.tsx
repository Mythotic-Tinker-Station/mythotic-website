import React, { Component, Fragment } from 'react';
import Box from '@material-ui/core/Box'

import classes from './Home.module.css'
import Banner from '../../components/UI/Banner/Banner';
import NewsFeed from '../../components/NewsComponent/NewsFeed';
import Information from '../../components/InfoComponent/Info';

class HomePage extends Component {
    
    render() {
        return (
            <Fragment>
                <Box className={classes.bannerbox}>
                    <Banner imgsrc=''/>
                </Box>
                <Box>
                    <NewsFeed />
                </Box>
                <Box>
                    <Information />
                </Box>
            </Fragment>
        )
    }
}

export default HomePage;