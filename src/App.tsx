import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { List, Basket } from './pages';
import Header from './components/Header'

import './App.css';


export const App = () => {
  return (
    <div className="App" >
      <Header></Header>
      <Route exact path="/" component={List} />
      <Route path="/basket" component={Basket} />
    </div>
  )
}



export default App;
