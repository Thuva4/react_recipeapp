var ReactDOM = require('react-dom');
var React = require('react');
var Main = require('./components/Main.jsx');
var Recipe = require('./components/Recipe.jsx');
var About=require('./components/about.jsx');
var Login = require('./components/login.jsx');
var Register = require('./components/Register.jsx');
var {Route , Router, IndexRoute , hashHistory} = require('react-router');

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="about" component={About}/>
    <IndexRoute component={Recipe}/>
    <Route path="Register" component={Register}/>
  </Route>

  </Router>,
  document.getElementById('app')
);
