var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass(
{
	render: function(){
		return(
			<div className='Well'>
			{this.props.children}
			<br></br>
			<br></br>
			</div>
		)
	}
});

module.exports = Main;
