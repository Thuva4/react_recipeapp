var React = require('react');
var {Link , IndexLink} = require('react-router');
var Nav= React.createClass({
  render: function () {
    return(
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Recipe Guider</a>
      </div>
      <ul className="nav navbar-nav navbar-left">
        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Recipe</IndexLink></li>
        <li>  <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <li>< a href = "#about" > Thuvarakan < /a></li>
      <li><a href="https://www.facebook.com/Semicolon04" target="_blank">Semicolon</a></li>
    </ul>
    </div>
  </nav>

);

  }
});

module.exports = Nav;
