import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import WitchListContainer from '../../containers/WitchListContainer';
import './App.css';
import Header from '../presentational/Header';
import Home from '../presentational/Home';


export default function App() {
  return <Router>
    <Header />
      <Switch>
        <Route exact path="/witches" component={WitchListContainer} />
        <Route exact path="/" component={Home} />
      </Switch>
</Router>
}
