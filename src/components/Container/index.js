import React from 'react';
import ImageCard from "../ImageCard/index";


function Container(props) {
        return(
            <div className="container">
            <div className="row">
                {props.images.map((image) => 
                    <ImageCard 
                        id={image.id}
                        key={image.id}
                        image={image.image}
                        alt={image.alt}
                        shuffleArray= {props.shuffleArray}
                        images={props.images}
                        checkGuess={props.checkGuess}
                        checkScore={props.checkScore}
                    />
                    )}
            </div>
            </div>
            )
};


export default Container;