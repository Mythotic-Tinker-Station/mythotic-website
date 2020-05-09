import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import './style/Lexicon.module.scss';

class LexiconPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <title>The Lexicon</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                </Helmet>
                <div className="page-wrapper">
                    <header>
                        <div className="logo">
                            <img src="assets/img/lexicon-cube.png" alt="Lexicon Logo"/>
                            <div className="header-text">
                                <h1>The Lexicon</h1>
                                <h5>The best Doom 2 wads in one package.</h5>
                            </div>
                        </div>
                        <div className="list-wrapper">
                            <h3>Compatible with...</h3>
                            <ul>
                                <li><a href="https://zandronum.com/">Zandronum</a></li>
                                <li><a href="https://zdoom.org/downloads">GZDoom</a></li>
                                <li><a href="https://zdoom.org/downloads">QZDoom</a></li>
                            </ul>
                        </div>
                    </header>
                </div>
                <div id="download-wrapper">
                    <h3><a href="https://allfearthesentinel.net/zandronum/download.php?file=lexicon-alpha-build-122.pk3">Latest Version</a></h3>
                    <hr/>
                    <h3><a href="https://allfearthesentinel.net/zandronum/download.php?file=lexicon-miscdata-alpha-build-122.pk3">Misc. Data</a> (recommended)</h3>
                    <hr/>
                    <h3><a href="https://allfearthesentinel.net/zandronum/download.php?file=lexicon-hubmusfix122.wad">Music Fix</a> (122a)</h3>
                </div>
                <div className="video-filter"></div>
                <div className="video-container">
                    <video src="assets/hero-vid.mp4" autoPlay muted loop></video>
                </div>
            </div>
        )
    }
}

export default LexiconPage;