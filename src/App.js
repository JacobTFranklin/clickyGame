import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper/index'
import NavBar from './components/NavBar/index'
import Home from './pages/Home'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <NavBar />
        <Wrapper>
            <Route exact path="/" component={Home} />
        </Wrapper>
        <Footer />
        </div>
      </Router>
    )};
};


export default App;
