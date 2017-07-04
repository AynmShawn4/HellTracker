import React from 'react';
import img from "../../public/homepage.jpg";
import {Link } from 'react-router-dom';

var homepageStyle = {
	container: {
		position: "relative",
		"maxHeight": "1200px",
		"maxWidth": "1400px",
		margin: "0px auto"
	},
	image: {
		position: "absolute",
		left: 0,
		top: 0
	},
	text: {	
		"fontSize": "3.5vw",
		textDecoration: "none"	
	},
	gradientDiv: {
		textAlign: "center",
		"zIndex": 100,
		paddingTop: "50px",
		paddingBottom: "50px",
		position: "absolute",	
		"marginTop": "35%",
		width: "100%",
		"backgroundColor": "Transparent",
		background: "rgba(1,1,2,0.8)",
		background: "linear-gradient(to right, rgba(255,0,0,0), rgba(1,1,2,1), rgba(0,0,255,0))"
	}
};

export default class Homepage extends React.Component {
	constructor(){
		super();
		this.state = {
			color: "white"
		}
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
	}

	mouseEnter() {
		this.setState({
			color: "rgba(1,2,200,1)"
		});
	};

	mouseLeave() {
		this.setState({
			color: "white"
		});
	}

    render() {
      var clone = Object.assign(homepageStyle.text, 
      	{color: this.state.color, cursor: "pointer"});
      var clone1 = Object.assign({}, clone);
      return (
         <div style={homepageStyle.container}>
         	<img src={img} style={homepageStyle.image} width="100%" />
            <div style={homepageStyle.gradientDiv}><Link to='/Login' style={clone1} 
            onMouseEnter={ this.mouseEnter } 
            onMouseLeave={ this.mouseLeave }>Welcome</Link></div>
         </div>
      );
   }
}
