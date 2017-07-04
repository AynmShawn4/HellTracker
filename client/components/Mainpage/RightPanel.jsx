import React from 'react';
import InfoPanel from './RightPanel/InfoPanel.jsx';
import InsertPanel from './RightPanel/InsertPanel.jsx';

const style = {
	div: {
		backgroundColor: "rgba(199,200,200,0.6)"
	}
};

export default class RightPanel extends React.Component {
   render() {
      return (
         <div style={style.div}>
       		<InfoPanel func={this.props.func} info={this.props.info}/>
       		<InsertPanel func={this.props.func} info={this.props.info}/>
         </div>
      );
   }
}
