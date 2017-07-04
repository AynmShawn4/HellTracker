import React from 'react';
import MainComponent from '../components/Mainpage/MainComponent.jsx';
import { connect } from 'react-redux';
import { addRecord, submitAll, invalidRecord, fieldChange} from '../actions';

const mapStateToProps = function(state) {
	return {
		stateInfo: state.reducer
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		func: {
			fieldChange: function(name, val){
				dispatch(fieldChange(name, val));
			},
			addRecordClick: function (obj, valid) {
				if (!valid){
					dispatch(invalidRecord());
				} else {
					dispatch(addRecord(obj));
				}
			},
			submitAllClick: function(obj){
				if (obj.length > 0){
					dispatch(submitAll(obj));
				}
			}
		}
	}
}

const main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default main;