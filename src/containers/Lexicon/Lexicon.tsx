import React, { Component } from 'react';

import LexiconImage from './assets/img/lexicon-cube.png';
import HeroVideo from './assets/hero/hero-vid.mp4';
import style from './style/Lexicon.module.scss';

class LexiconPage extends Component {
    render() {
        return (
            <div className={style["formerbody"]}>
                <div className={style["page-wrapper"]}>
                    <header className={style["splash-header"]}>
                        <div className={style["logo"]}>
                            <img src={LexiconImage} alt="Lexicon Logo"/>
                            <div className={style["header-text"]}>
                                <h1>The Lexicon</h1>
                                <h5>The best Doom 2 wads in one package.</h5>
                            </div>
                        </div>
                        <div className={style["list-wrapper"]}>
                            <h3>Compatible with...</h3>
                            <ul>
                                <li><a href="https://zandronum.com/">Zandronum</a></li>
                                <li><a href="https://zdoom.org/downloads">GZDoom</a></li>
                                <li><a href="https://zdoom.org/downloads">QZDoom</a></li>
                            </ul>
                        </div>
                    </header>
                </div>
                <div id={style["download-wrapper"]}>
                    <h3><a href="https://allfearthesentinel.net/zandronum/download.php?file=lexicon-alpha-build-122.pk3">Latest Version</a></h3>
                    <hr/>
                    <h3><a href="https://allfearthesentinel.net/zandronum/download.php?file=lexicon-miscdata-alpha-build-122.pk3">Misc. Data</a> (recommended)</h3>
                    <hr/>
                    <h3><a href="https://allfearthesentinel.net/zandronum/download.php?file=lexicon-hubmusfix122.wad">Music Fix</a> (122a)</h3>
                </div>
                <div className={style["video-filter"]}></div>
                <div className={style["video-container"]}>
                    <video src={HeroVideo} autoPlay muted loop></video>
                </div>
            </div>
        )
    }
}

export default LexiconPage;