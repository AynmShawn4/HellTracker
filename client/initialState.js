
const initialState = {
	EnteredNamePassword: {
		Name: "",
		Password: "",
	},
	SignupNamePassword: {
		Username: "",
		Password: "",
		ConfirmedPassword: ""
	},
	Alert: {
		visible: false,
		style: "",
		msg: ""
	},
	Nav: {
		Header: "HellTracker",
		Left: [],
		Right: {
			Title: "Settings",
			DropDown: ["Nothing To Show"]
		}
	},
	Connected: false,
	Current: "Home",
	TreeNode: [],
	Summary: [],
	Epics: {
		Title: "Epics: ",
		Total: 0,
		List: [
			],
		"Souls" : 0,
		"Orbs": 0,
		"Gabel": 0,
		"Total Runs": 0
	},

};

export default initialState;
