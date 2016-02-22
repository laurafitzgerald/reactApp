
var ReactDOM = require('react-dom');
var React = require('react');
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route

//var LoginRoute = require('./LoginPage');
var request = require('superagent');
var acts = require('./activities').activities;




var UserItem = React.createClass({

	render: function(){
		return(
			<p>{this.props.user.location}</p>
			)
	}
});

var ActivityItem = React.createClass({

	render : function(){
		return(

		<li id = "workout-">
		<hr/>
			<h2>
				By --- <span>{this.props.user}</span> ----
			</h2>
			<p className = "lead">
			    Activity Name: {this.props.activity.name} </p>
			<p className = "lead">
				Distance: {this.props.activity.distance}  KM </p>
			<p className = "lead">
				Speed: {this.props.activity.speed}   KM/HR</p>
			<p><span className="glyphicon glyphicon-time"></span>
			Workout Completed on: {this.props.activity.date}/</p>
		</li>

		
		)
	}
});

var ActivitiesList = React.createClass({
	render : function(){
	
			var activities = this.props.list.map(function(activity){
				return <ActivityItem key = {activity._id} activity = {activity} user = {this.props.user}/>

			}.bind(this));
		
		return(
			<div className = "activityList">
				<ul>
				{activities};
				</ul>
			</div>
			)
	}
});

/*
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

*/

var HomeFeed = React.createClass({
	componentDidMount : function(){
		var that = this;
		request.get('http://localhost:8000/bikes?id=56b9f14c1cec89ec13000001')
			.end(function(error, res){
				if(res){
					console.log("got bikes");
					var json = JSON.parse(res.text);
					//localStorage.clear();
					localStorage.setItem('bikes', JSON.stringify(json));
				}else{
					console.log(error);
				}

			}.bind(this));
		request.get('http://localhost:8000/activities?id=56b9f15e1cec89ec13000001')
			.end(function(error,res){
				if(res){
					console.log("got activities");
					var json = JSON.parse(res.text);
					//localStorage.clear();
					localStorage.setItem('activities', JSON.stringify(json));
					//this.setState;
				}else{
					console.log(error);
				}

			}.bind(this));
			request.get('http://localhost:8000/users/56b9f15e1cec89ec13000002')
			   .end(function(error,res){
			   		if(res){
			   		
			   			console.log("got user");

			   			var json = JSON.parse(res.text);
			   			console.log(json);
			   			//localStorage.clear();
			   			localStorage.setItem('user', JSON.stringify(json));

			   		}else{
			   			console.log(error);
			   		}

			  }.bind(this));

	},
	render : function(){
		var bikes = localStorage.getItem('bikes') ? JSON.parse(localStorage.getItem('bikes')) : [] ;
		console.log(bikes);
		var activities = localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')) : [] ;
		var currentUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')): [];
		console.log(currentUser);
		localStorage.clear();
		var activities = acts;
		console.log(activities);

	
		return(
			<div className ="cyclingapp">
				<h1>Welcome to the Cycling Application</h1>
				<div>
					<div className = "row">
					<div className = "col-md-6 col-md-offset-3">
					<ActivitiesList list = {activities} user = {currentUser} />
					</div>
					</div>
					<div className ="row">
		
					</div>
				</div>
			</div>
		);
	}
});

var App = React.createClass({
  render : function() {
    return (
       <div>
          <h1>App</h1>
           {this.props.children}
        </div>
    )
  }
});

ReactDOM.render(
	(
  <Router >
    <Route path="/" component={App}>
      <Route path="feed" component={HomeFeed} />
     
    </Route>
  </Router>
)
	,
	document.getElementById('mount-point'));