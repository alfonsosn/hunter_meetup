import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Layout from './views/Layout';
import Week from './views/Week';
import Day from './views/Day';
import './App.css';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Week} />
    <Route path="/d/:day" component={Day} />
  </Switch>
);

const Header = () => (
  <Route path="/" component={Layout} />
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
