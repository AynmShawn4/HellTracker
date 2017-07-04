import initialState from '../initialState.js';

export default function loginReducer(state = initialState , action){
	switch (action.type){
		case 'SIGNIN_SUCCESS':
			const obj = Object.assign({}, state);
			obj.Alert = {
				visible: true,
				style: "success",
				msg: "You have logged in successfully!"
			};
			obj.Connected = true;
			obj.Nav.Right.DropDown = ["log out"];
			obj.TreeNode = action.info.data
			return obj;
		case 'SIGNIN_ERROR':
			const obj1 = Object.assign({}, state);
			obj1.Alert = {
				visible: true,
				style: 'danger',
				msg: action.info.data.msg
			};
			return obj1;

		case 'NAME_PASSWORD_CHANGE':
			if (action.info.name === "Name"){
				return Object.assign({}, state, {
					EnteredNamePassword: {
						Name: action.info.value,
						Password: state.EnteredNamePassword.Password
					}
				})
			} else if (action.info.name === "Password"){
				return Object.assign({}, state, {
					EnteredNamePassword: {
						Name: state.EnteredNamePassword.Name,
						Password: action.info.value
					}
				});
			}
			return state;
		case 'INVALID_INPUT':
			return Object.assign({}, state, {
					Alert: {
						visible: true,
						style: "danger",
						msg: "Please Enter Both Password and Accout Name!"
					},
				}

			);

		default:
			return state;
	}
};
