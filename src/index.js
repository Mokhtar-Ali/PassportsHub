import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import NavBar from './components/Navbar';
import About from './components/About';



ReactDOM.render(
  <Router>
    <NavBar />
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/cities/:id" component={About} />

    {/* <Route exact path="/egypt" component={Egypt} />
    <Route exact path="/thailand" component={Thailand} />
    <Route exact path="/ecuador" component={Ecuador} />
    <Route exact path="/colombia" component={Colombia} /> */}

  </Router>
  , document.getElementById('root'))
serviceWorker.unregister();