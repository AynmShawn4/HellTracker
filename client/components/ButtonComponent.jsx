import React from 'react';
import {Form, FormGroup, Col, FormControl,ControlLabel } from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const style = {
	button: {
		margin: "0px auto",
		maxWidth: 300,
		marginTop: 10
	},
	buttons: {
		margin: 10
	}
};

export default class ButtonComponent extends React.Component {
	render() {
		const button = this.props.info.buttons.map(function(val, index){
			return (
				<Link to={val.link} key={index} >
			 	<Button bsStyle={val.style} type={(val.type === "")? "button" : val.type  } 
			 	onClick={ (e) => val.func(e)}
				style={style.buttons} bsSize={val.size} >
				 {val.Name} < /Button></Link>
			);
			}
		);
		return (
			<div>
					<ButtonToolbar style={style.button}>{button}</ButtonToolbar>
			</div>
		);
	}
}