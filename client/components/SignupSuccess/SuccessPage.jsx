import React from 'react';
import { Link } from 'react-router-dom';
import InfoComponent from '../InfoComponent.jsx';
import Navigation from '../Mainpage/Nav.jsx';

const style = {
	div: {
		maxWidth: 1200,
		margin: "0px auto",
		backgroundColor: "rgba(160,200,200,0.5)",
		paddingTop: 200,
		paddingBottom: 200
	},
	button: {
		margin: "0px auto",
		maxWidth: 100,
	}
};

export default class SuccessPage extends React.Component {
    render() {
      return (
      	<div>
      		<Navigation info={this.props.info}/>
	        <div style={style.div}>
	         	<InfoComponent info={this.props.info.Alert}/>
	         	<div  style={style.button}>
	         		<Link to='/Mainpage'><button>Continue</button></Link>
	         	</div>
	         </div>
	    </div>
      );
   }
}
