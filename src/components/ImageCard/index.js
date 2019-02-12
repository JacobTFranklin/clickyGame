import React from "react";
import "./style.css";

function ImageCard(props){
    return (
        <div className="col md 3">
        <div className="card" onClick={() => {props.shuffleArray(props.images); props.checkGuess(props.id)}} id={props.id}>
            <div className="img-container">
                <img alt={props.alt} src={props.image} />
            </div>
        </div>
        </div>
    )
};

export default ImageCard;