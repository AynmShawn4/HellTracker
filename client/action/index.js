import fetch from 'isomorphic-fetch';

/*Signin related actions*/
export function incorrectNamePasswordLength(){
	return {
		type: "INCORRECT_NAME_PASSWORD_LENGTH",
		info: {

		}
	}
}

export function validInput(){
	return {
		type: 'VALID_INPUT',
		info: {

		}
	}
}

export function invalidInput(){
	return {
		type: 'INVALID_INPUT',
		info: {

		}
	}
}

export function namePasswordChange(name, value){
	return {
		type: 'NAME_PASSWORD_CHANGE',
		info: {
			name: name,
			value: value
		}
	}
}

export function signinAttempt(){
	return {
		type: "SIGNIN_ATTEMPT",
		info: {

		}
	}
}

export function signinSuccess(json){
	return {
		type: "SIGNIN_SUCCESS",
		info: {
			data: json
		}
	}
}

export function signinError(json){
	return {
		type: "SIGNIN_ERROR",
		info: {
			data: json
		}
	}
}

export function signinRequest(obj){
	return function(dispatch){
		dispatch(signinAttempt());
		return fetch('http://localhost:3000/loginRequest',{
			credentials: "same-origin",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST', 
			body: JSON.stringify(obj)
		})
		.then(res => {
			if (res.ok){
				return res.json();
			} else {
				throw new Error("Something went wrong on server side")
			}
		 })
		.then(json => {
			if( json.Success === true){
				dispatch(signinSuccess(json));
			} else {
				dispatch(signinError(json));
			}
		})
		.catch(err => {
			const errorObj = {Success: false, msg: "Something went wrong on server side"};
			dispatch(signinError(errorObj));
		});
	}
}

/*signup related actions*/
export function signupNamePasswordChange(name, value){
	return {
		type: 'SIGNUP_NAME_PASSWORD_CHANGE',
		info: {
			name: name,
			value: value
		}
	}
}

export function signupInvalid(){
	return {
		type: 'SIGNUP_INVALID',
		info: {

		}
	}
}

export function signupAttempt(){
	return {
		type: "SIGNUP_ATTEMPT",
		info: {

		}
	}
}

export function signupSuccess(json){
	return {
		type: "SIGNUP_SUCCESS",
		info: {
			data: json
		}
	}
}

export function signupError(json){
	return {
		type: "SIGNUP_ERROR",
		info: {
			data: json
		}
	}
}

export function signupRequest(obj){
	return function(dispatch){
		dispatch(signupAttempt());
		return fetch('http://localhost:3000/signupRequest',{
			credentials: "same-origin",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'PUT', 
			body: JSON.stringify(obj)
		})
		.then(res => {
			if (res.ok){
				return res.json();
			} else {
				throw new Error("Something went wrong on server side")
			}
		 })
		.then(json => {
			if( json.Success === true){
				dispatch(signupSuccess(json));
			} else {
				dispatch(signupError(json));
			}
		})
		.catch(err => {
			const errorObj = {Success: false, msg: "Something went wrong on server side"};
			dispatch(signupError(errorObj));
		});
	}
}


/* mainpage related actions*/

export function fieldChange(name, val){
	return {
		type: "FIELD_CHANGE",
		info: {
			name: name,
			value: val
		}
	}
}
export function addRecord(obj){
	return {
		type: "ADD_RECORD",
		info: {
			data: obj
		}
	}
}

export function invalidRecord(){
	return {
		type: "INVALID_RECORD",
		info: {

		}
	}
}

export function submitAttempt(){
	return {
		type: "SUBMIT_ATTEMPT"
	}
}

export function submitSuccess(json){
	return {
		type: 'SUBMIT_SUCCESS',
		info: json
	}
}

export function submitError(){
	return {
		type: 'SUBMIT_ERROR'
	}
}

export function submitAll(obj) {

	return function(dispatch){
		dispatch(submitAttempt());
		return fetch('http://localhost:3000/addRecord',{
			credentials: "same-origin",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST', 
			body: JSON.stringify(obj)
		})
		.then(res => {
			if (res.ok){
				return res.json();
			} else {
				throw new Error("Something went wrong on server side")
			}
		 })
		.then(json => {
			if( json.Success === true){
				dispatch(submitSuccess(json));
			} else {
				dispatch(submitError(json));
			}
		})
		.catch(err => {
			const errorObj = {Success: false, msg: "Something went wrong on server side"};
			dispatch(submitError(errorObj));
		});
	}
}

export function signUp(){
	return {
		type: "SIGN_UP",
		info: {

		}
	}
}

