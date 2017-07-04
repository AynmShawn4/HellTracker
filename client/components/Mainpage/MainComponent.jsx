import React from 'react';
import Navigation from './Nav.jsx';
import Bottom from './Bottom.jsx';

//Main component 
export default class MainComponent extends React.Component {
   render() {
      return (
         <div>
         	<Navigation info={this.props.stateInfo}/>
         	<Bottom func={this.props.func} info={this.props.stateInfo}/>
         </div>
      );
   }
}
