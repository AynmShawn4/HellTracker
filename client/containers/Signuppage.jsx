import React from 'react';
import SignupPanel from '../components/Signuppage/SignupPanel.jsx';
import { connect } from 'react-redux';
import { signupNamePasswordChange, signupInvalid, signupRequest } from '../actions';

const mapStateToProps = function(state) {
	return {
		test: state.signupReducer
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		change: function(event, name) {
			dispatch(signupNamePasswordChange(name, event.target.value));
		},
		valid: function(obj){
			dispatch(signupRequest(obj));
		},
		invalid: function(){
			dispatch(signupInvalid());
		}
	}
}

const signup = connect(mapStateToProps, mapDispatchToProps)(SignupPanel);

export default signup;