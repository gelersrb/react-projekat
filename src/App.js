import React from 'react'
import './App.css'
import Navigation from "./components/Navbar"
import HomePage from "./components/Home"
import Foot from "./components/Footer"
import jsx from "./components/JSX"
import ReactRender from "./components/ReactRender";
import Komponenta from "./components/Komponente"
import State from "./components/State";
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Props from "./components/Props";
import Metode from "./components/Metode";
import Events from "./components/Events";
import Forme from "./components/Forme";
import proba from "./components/proba";

function App() {
  return (
    <Router>
<Navigation/>
        <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/jsx' component={jsx}/>
        <Route path='/render' component={ReactRender}/>
        <Route path='/komponenta' component={Komponenta}/>
        <Route exact path="/props" render={(props) => <div>
            <Props {...props} ime={`Jelena`} prezime={`Todorović`} index={`NRT-80/17`}/>
            <Props {...props} ime={`Ivana`} prezime={`Todorović`} index={`NRT-80/17`}/> </div>}/>
            <Route path='/state' component={State}/>
            <Route path='/metode'   component={Metode} />
            <Route path='/events' component={Events}/>
            <Route path='/forme' component={Forme}/>
            <Route path='/forma' component={proba}/>
        </Switch>
       <Foot/>
    </Router>
  );
}

export default App;
