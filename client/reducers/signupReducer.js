import initialState from '../initialState.js';

export default function networkReducer(state = initialState , action){
	var obj;
	switch (action.type){
		case 'SIGNUP_INVALID':
			obj = Object.assign({}, state);
			obj.Alert = {
						visible: true,
						style: "danger",
						msg: "Please Enter All the fields and password length > 6"
					};
			return obj;
		case 'SIGNUP_SUCCESS':
			obj = Object.assign({}, state);
			obj.Alert = {
				visible: true,
				style: "success",
				msg: "You have registered successfully!"
			};
			obj.Connected = true;
			obj.Nav.Right.DropDown = ["log out"];
			return obj;
		case 'SIGNUP_ERROR':
			obj = Object.assign({}, state);
			obj.Alert = {
				visible: true,
				style: 'danger',
				msg: action.info.data.msg
			};
			return obj;

		case 'SIGNUP_NAME_PASSWORD_CHANGE':
			obj = Object.assign({}, state);
			if (action.info.name === "Username*"){
				obj.SignupNamePassword.Username = action.info.value;
			} else if (action.info.name === "Password*") {
				obj.SignupNamePassword.Password = action.info.value;
			} else if (action.info.name === "Confirm Password*") {
				obj.SignupNamePassword.ConfirmedPassword = action.info.value;
			}
			return obj;

		default:
			return state;
	}
};
