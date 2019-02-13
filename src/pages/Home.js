import React, {Component} from 'react';
import Container from '../components/Container/index'
import Header from '../components/Header/index'
import NavBar from '../components/NavBar/index'
import Wrapper from '../components/Wrapper/index'
import images from "../images.json"


class Home extends Component  {

  state = {
    images,
    guesses:[],
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    color: ""
  }

  initialState = {
    images,
    guesses:[],
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    color: ""
  }



shuffleArray =images => {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    };
    this.setState({images})
};

checkGuess = id => {
    if(this.state.guesses.includes(id)){
        this.setState({score: 0});
        this.setState({message:"You guessed incorrectly!"});
        this.setState({color:"text-danger"});
        this.setState({guesses: []});

    }
    else{
        this.state.guesses.push(id);
        this.setState({score: this.state.score +1});
        this.setState({message:"You guessed correctly!"});
        this.setState({color:"text-success"});
        if(this.state.topScore <= this.state.score || this.state.topScore === 0){
            this.setState({topScore: this.state.topScore +1})
        }
  
    }
}


componentDidMount(initialState) {
  this.setState(initialState);
}



  render(){
    return(
    <div>
      <NavBar score={this.state.score} topScore={this.state.topScore} message={this.state.message} color={this.state.color} shuffleArray={this.shuffleArray} images={this.state.images}/>
      <Wrapper>
      <Header/>
      <Container images={this.state.images} shuffleArray={this.shuffleArray} checkGuess={this.checkGuess}/>
      </Wrapper>
    </div>
    )
  };
}

export default Home;