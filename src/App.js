import React from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Header from './component/header/header';
import ShopPage from './pages/shopPage/Shop';
import SignInPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page';

function App() {

  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={ Homepage } />
          <Route exact path='/shop' component={ ShopPage } />
          <Route exact path='/sign-in' component={ SignInPage } />
        </Switch>
    </div>
  );
}

export default App;
