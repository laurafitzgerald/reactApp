
var ReactDOM = require('react-dom')
var React = require('react')
var api = require('./stubAPI').api;


var UserItem = React.createClass({

	render: function(){
		return(
			<p>{this.props.user.name}</p>
			);
	}



});

var UsersTable = React.createClass({
	
	render : function(){
		var users = this.props.list.map(function(item){
			return <UserItem key = {item.email} user = {item}/>
		});
		return(
			<div className = "userlist">
			{users}
			</div>

		);
	}

});



var CyclingApp = React.createClass({
	render : function(){

		var users = api.getAll();
		return(
			<div className ="cyclingapp">
				<h1>Welcome to the Cycling Application</h1>
				<div>
					<UsersTable list = {users}/>
				</div>
			</div>
		);
	}
});


ReactDOM.render(
	<CyclingApp />,
	document.getElementById('mount-point'));