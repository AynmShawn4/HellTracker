import React from 'react';
import Signin from '../components/Loginpage/Login.jsx';
import { connect } from 'react-redux';
import { skip, signUp, signinRequest, validInput, invalidInput,
	incorrectNamePasswordLength, namePasswordChange } from '../actions';

const mapStateToProps = function(state) {
	return {
		stateInfo: state.loginReducer,
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		change: function(event, name) {
			dispatch(namePasswordChange(name, event.target.value));
		},
		signUpClick: function() {
			dispatch(signUp());
		},
		validInput: function(obj){
			dispatch(signinRequest(obj));
		},
		invalidInput: function(){
			dispatch(invalidInput());
		},

	}
}

const login = connect(mapStateToProps, mapDispatchToProps)(Signin);

export default login;