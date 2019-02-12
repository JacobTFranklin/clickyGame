import React from "react";
import "./style.css";
import {Animated} from "react-animated-css";

function Header () {
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <br/>
        <br/>
            <Animated animationIn="pulse">
            <h1 className="display-4"><center>Clicky Game!</center></h1>
            </Animated>
            <p className="lead"><center>Click on an image to earn points, but don't click on any more than once!</center></p>
        </div>
        </div>
    )
};

export default Header;