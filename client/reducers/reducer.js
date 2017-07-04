import initialState from '../initialState.js';

export default function reducer(state = initialState, action){
	var obj;
	switch (action.type){
		case 'ADD_RECORD':
			obj = Object.assign({}, state);
			obj.Alert = {
				visible: true,
				style: "success",
				msg: "Added successfully!"
			}
			obj.Epics.Total++;
			obj.Epics.List.push(action.info.data);
			return obj;
		case 'INVALID_RECORD':
			return Object.assign({}, state, {
				Alert: {
					visible: true,
					style: "danger",
					msg: "Invalid Record, please enter all the fields. Comment section is optional."
				},
			}

			);
		case 'SUBMIT_ERROR':
			obj = Object.assign({}, state);
			obj.Alert = {
				visible: true,
				style: "danger",
				msg: "Something went wrong when submitting to server."

			}
			return obj;
		case 'SUBMIT_SUCCESS':
			obj = Object.assign({}, state);
			obj.Alert = {
				visible: true,
				style: "success",
				msg: "Sumbitted succuessfully."
			}
			obj.Epics = {
				Title: "Epics: ",
				Total: 0,
				List: [
					],
				"Souls" : 0,
				"Orbs": 0,
				"Gabel": 0,
				"Total Runs": 0
			};
			return obj;
		case 'FIELD_CHANGE':
			obj = Object.assign({}, state);
			const val = action.info.name;
			obj.Epics[val] = action.info.value;
			return obj;

		case 'DELETE_RECORD':
			return state;

		default:
			return state;
	}
};
