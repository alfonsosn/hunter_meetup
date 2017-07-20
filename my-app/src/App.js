import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import Layout from './Layout';
import './App.css';

const Main = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

const Header = () => (
  <Route exact path="/" component={Layout} />
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
