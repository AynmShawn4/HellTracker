import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem,} from 'react-bootstrap';

const style = {
	div: {
		maxWidth: "1200px",
		margin: "0px auto"
	}
}
export default class Nave extends React.Component {
   render() {
   		var i =  0;
   		const left = this.props.info.Nav.Left.map(function(val, index){
   			i++;
   			return <NavItem key={index}>{val}</NavItem>
   		});
   		const right = this.props.info.Nav.Right.DropDown.map(function(val, index){
   			if (val === "Divider"){
   				return <MenuItem key={i+ 1 + index}divider/>
   			} else {
   				return <MenuItem key={i + 1 + index}>{val}</MenuItem>
   			}
   		});
        return (
         <div style={style.div}>
     		 <Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <span>{this.props.info.Nav.Header}</span>
			      </Navbar.Brand>
			    </Navbar.Header>
			    <Nav>
			      {left}
			    </Nav>
			    <Nav pullRight>
			      <NavDropdown key={i+ 1} title={this.props.info.Nav.Right.Title}
			       id="basic-nav-dropdown">
			        {right}
			      </NavDropdown>
			    </Nav>
			  </Navbar>
         </div>
      );
   }
}
