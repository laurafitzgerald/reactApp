var React = require('react');
var DocumentTitle = require('react-document-title');
var StormPath = require('react-stormpath');


export default class LoginPage extends React.component{
	render(){
		return(
			<DocumentTitle title={'Login'}>
			 <div className="container">
			   <div className = "row">
			     <div className = "col-xs-12">
			       <h3> Login </h3>
			       <hr />
			     </div>
			   </div>
			   <StormPath.LoginForm redirectTo="/" />
			 </div>
			</DocumentTitle>

		);
	}
}

