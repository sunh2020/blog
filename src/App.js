import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import AboutMe from './containers/AboutMe';

function App() {
  return (

    <Router>
    <div className="App">
      <Header />
      <Hero />

      <Route path="/" exact component={Home}/>
      <Route path="/about-me" component={AboutMe}/>
      <Route path="/contact-us" component={ContactUs}/>
      <Route path="/post/:slug" component={Post}/>
     
    </div>
    </Router>
  );
}

export default App;
