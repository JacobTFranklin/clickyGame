import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function Navbar(props) {
    return (
      <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="col md 12">
        
          <ul className="navbar-nav">
          <div class= "col md 4">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Clicky Game
          </Link>
          </div>
          <div className= "col md 4">
            <li className="nav-item">
                {props.message}
            </li>
            </div>
            <div className= "col md 4">
            <li className="nav-item" id="score">
                Score: {props.score} | Top Score: {props.topScore}
            </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  