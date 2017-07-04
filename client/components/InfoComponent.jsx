import React from 'react';
import {Alert} from 'react-bootstrap';

const style = {
   alert: {
      textAlign: "center"
   }
}
export default class InfoComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			visible: this.props.info.visible
		}

	}

   componentWillReceiveProps(nextProps){
      if (nextProps.info.visible != this.state.visible){
         this.setState({visible: nextProps.info.visible});
      }
   }

    render() {
      	if (this.state.visible){
      		return (
               <div style={style.alert}>
      			<Alert bsStyle={this.props.info.style} onDismiss={this.handleDismiss.bind(this)}>
      				 {this.props.info.msg}
      			</Alert>
               </div>
      		);
      	} else {
	      	return <div/>;
	    }

   }
   handleDismiss() {
   		this.setState({visible: false});
   }
}
