import React from "react";
import "./style.css";

function Header () {
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <br/>
        <br/>
            <h1 className="display-4"><center>Clicky Game!</center></h1>
            <p className="lead"><center>Click on an image to earn points, but don't click on any more than once!</center></p>
        </div>
        </div>
    )
};

export default Header;