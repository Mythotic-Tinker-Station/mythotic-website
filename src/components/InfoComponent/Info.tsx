/* This file handles the information section, discussing what the Mythotic Tinkerstation is
and what projects the team completes, Team members and the like.

This component should be visible on the Homepage.

This component is rather static
*/

// Import the libraries required
import React, { Component } from "react";
import classes from "./Info.module.css";

// Import other components if required


// Import data model


class Information extends Component {
    render() {
        return(
            <div className={classes.info}>
                <h1>What is the Mythotic Tinker-Station?</h1>
                <br></br>
                <p>
                    The Mythotic Tinker-Station is a doom modding group! We make mods and useful tools for doom
                    (Currently the Lexicon which allows server hosters to host many mapsets in one package on zandronum)

                    We are hoping to get into gameplay mods and custom maps in the near future
                </p>
                <br></br>
                <h1>Who is the Team?</h1>
                <br></br>
                <p>
                    Insert team members here
                </p>
            </div>
        )
    }
}

export default Information;