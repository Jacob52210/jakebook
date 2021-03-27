import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
   
  )
}

export default App;