import React from 'react';
import { DropdownButton, SplitButton, MenuItem } from 'react-bootstrap';

const style = {
	backgroundColor: "white",
	margin: "10px auto",
	textAlign: "center",

}
export default class DropButtonComponent extends React.Component {
	render() {	
			const dropdown = this.props.info.List.map(function(val, index){
				return (
					<MenuItem key={index}>{val.Name}</MenuItem>
				);
			});
		return (
			<div style={style}>
				<span>{this.props.info.Title}</span>
				<SplitButton bsStyle="default" title={this.props.info.Total} id="dropdown">
	              {dropdown}
	            </SplitButton>
			</div>
		);
	}
}