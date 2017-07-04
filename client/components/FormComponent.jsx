import React from 'react';
import {Form, FormGroup, Col, FormControl,ControlLabel } from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class FormComponent extends React.Component {
	render() {
		const change = this.props.change;
		const row = this.props.info.rows.map(function(val, index){
			const required = val.required;
			const col = val.col;
			return (
				<FormGroup key={index}>
					<Col componentClass={ControlLabel} lg={col[0]} md={col[1]} sm={col[2]} >
						{val.Name}
					</Col>
					<Col lg={col[3]} md={col[4]} sm={col[5]} >
					<FormControl onChange={(e) => change(e,val.Name)} type={val.type} required={required}/></Col>
				</FormGroup>
			);
		});
		return (
			<div>
					{row}
			</div>
		);
	}
}