
var React = require('react');
var ReactDOM = require('react-dom');
var Dome = require('./index2.js')

var Content = React.createClass({
	render:function(){
		return(
			<div>
				<Dome/>
			</div>
		)
	}
})



ReactDOM.render(<Content/>,document.getElementById("out"))