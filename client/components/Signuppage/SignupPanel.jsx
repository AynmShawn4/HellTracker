import React from 'react';
import FormComponent from '../FormComponent.jsx';
import Navigation from '../Mainpage/Nav.jsx';
import InfoComponent from '../InfoComponent.jsx';
import ButtonComponent from '../ButtonComponent.jsx';
import {Form, Button} from 'react-bootstrap';
import SuccessPage from '../SignupSuccess/SuccessPage.jsx';

const style ={
	div: {
		margin: "0px auto",
		paddingTop: "100px",
		paddingBottom: "100px",
		maxWidth: "1200px",
		backgroundColor: "rgba(199,200,200,0.6)"
	}
};

export default class SignupPanel extends React.Component {
	constructor() {
		super();
		this.state = {
			loginForm: {
				horizontal: "horizontal",
				rows: [{Name: "Username*", type: "text", col: [4,4,4,4,4,5]},
				 {Name: "Password*", type: "password", col: [4,4,4,4,4,5]},
				 {Name: "Confirm Password*", type: "password", col: [4,4,4,4,4,5]}
				],
				buttons: [
				{Name: "Submit",type: "", link: "/Success", style: "default", size: "sm",
					func: this.handleSubmit.bind(this)}
				]
			}
		}
	}

	handleSubmit(e){
		const tempProps = this.props.test.SignupNamePassword;
		const call = this.props;
		if ((tempProps.Username !== "") 
			&& (tempProps.Password === tempProps.ConfirmedPassword) 
			&&(tempProps.Password.length > 6)){
			call.valid(tempProps);
			e.preventDefault();
		} else {
			call.invalid();
			e.preventDefault();
		}

	}

    render() {
    	if (this.props.test.Connected === true){
			return (
				<div>
					<SuccessPage info={this.props.test}/>
				</div>
			);
		} 

      return (
      	<div>
      		<Navigation info={this.props.test}/>
	        <div style={style.div}>
	        	<Form horizontal>
		     		<FormComponent change={this.props.change} info={this.state.loginForm}/>
		     		<InfoComponent info={this.props.test.Alert}/>
		     		<ButtonComponent info={this.state.loginForm}/>
		     	</Form>
	        </div>
	    </div>
      );
   }
}
