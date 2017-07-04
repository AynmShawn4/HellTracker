import React from 'react';
import LeftPanel from './LeftPanel.jsx';
import RightPanel from './RightPanel.jsx';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

const style = {
	div: {
		margin: "0px auto",
		maxWidth: "1200px",
	}
};

//Bottom part of main page
export default class Bottom extends React.Component {
   render() {
      return (
         <div style={style.div}>
         	<Row>
	         	<Col xs={6} md={6} sm={12}><LeftPanel info={this.props.info}/> </Col>
	         	<Col xs={6} md={6} sm={12}><RightPanel func={this.props.func} info={this.props.info}/> </Col>
	         </Row>
         </div>
      );
   }
}
