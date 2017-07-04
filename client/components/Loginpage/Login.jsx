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
	},
};

export default class Signin extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loginForm: {
				horizontal: "horizontal",
				rows: [{Name: "Name", type: "text", col: [4,4,4,4,4,5]},
				 {Name: "Password", type: "password", col: [4,4,4,4,4,5]},
				],
				buttons: [
				{Name: "Sign in",type: "", link: "/Success", style: "default", size: "sm", 
					func: this.handleSubmit.bind(this) },
				{Name: "Sign up",type: "", link: "/Signup", style: "default", size: "sm", 
					func: this.props.signUpClick },

				]
			},
		}	
	}

	handleSubmit(e){
		const tempProps = this.props;
		if ((tempProps.stateInfo.EnteredNamePassword.Name !== "")
		&& (tempProps.stateInfo.EnteredNamePassword.Password !== "")){
			tempProps.validInput(tempProps.stateInfo.EnteredNamePassword);
			e.preventDefault();
		} else {
			tempProps.invalidInput();
			e.preventDefault();
		}
	}

	render() {
		if (this.props.stateInfo.Connected === true){
			console.log(this.props.stateInfo);
			return (
				<div>
					<SuccessPage info={this.props.stateInfo}/>
				</div>
			);
		} 
		return (
			<div>
				<Form horizontal>
					<Navigation info={this.props.stateInfo}/>
					<div style={style.div}>
						<FormComponent change={this.props.change} info={this.state.loginForm}/>
						<InfoComponent info={this.props.stateInfo.Alert}/>
						<ButtonComponent info={this.state.loginForm}/>
					</div>
				</Form>
			</div>
		);
	}
}
