import preloader from "../../../assets/images/loader.svg";
import classes from "./Preloader.module.css"
import React from "react";

const Preloader = (props) => {
    return(
        <div className={classes.preloader}>
            <img src={preloader} width="250px" height="250px" alt="preloader"/>
        </div>
    )
}
export default Preloader