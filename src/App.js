import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Featured from './components/featured/Featured';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer'
import Hightlights from './components/highlights/Highlights'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
       
       <Header></Header>
       <Featured></Featured>
       <Hightlights></Hightlights>
       <Footer></Footer>

     </div>
      </Router>
    );
  }
}

export default App;
