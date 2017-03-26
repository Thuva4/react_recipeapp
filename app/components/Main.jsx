var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('./nav.jsx');
var Footer = require('./footer.jsx');

var Main = React.createClass(
{
	render: function(){
		return(
			<div className='Well'>
			<Nav></Nav>
<div className="container">
			{this.props.children}
		</div>
			<br></br>
			<br></br>
<Footer></Footer>
			</div>
		)
	}
});

module.exports = Main;
