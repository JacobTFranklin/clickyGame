import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {Animated} from "react-animated-css";


function Navbar(props) {
    return (
      <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="col md 12">
        
          <ul className="navbar-nav">
          <div class= "col md 4">
          <Link to="/clickyGame" className={window.location.pathname === "/clickyGame" ? "nav-link active" : "nav-link"}>
                <span onClick={() => window.location.reload()}>Clicky Game</span>
          </Link>
          </div>
          <div className= "col md 4">
          <Animated animationIn="pulse">
            <li className="nav-item">
                <span className= {props.color}>{props.message}</span>
            </li>
            </Animated> 
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
  