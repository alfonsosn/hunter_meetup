import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Layout from './views/Layout';
import Week from './views/Week';
import Day from './views/Day';
import * as firebase from 'firebase';
import './App.css';

var config = {
  apiKey: "AIzaSyBJzi5_WOjjN9Soi622ybjoAk0zyxlD_XE",
  authDomain: "hunter-meetup.firebaseapp.com",
  databaseURL: "https://hunter-meetup.firebaseio.com",
  projectId: "hunter-meetup",
  storageBucket: "hunter-meetup.appspot.com",
  messagingSenderId: "508957175737"
};

firebase.initializeApp(config)

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
