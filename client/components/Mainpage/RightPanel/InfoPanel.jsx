import React from 'react';
import { DropdownButton, SplitButton, MenuItem } from 'react-bootstrap';
import FormComponent from '../../FormComponent.jsx';
import DropButtonComponent from '../../DropButtonComponent.jsx';
import {Form, Button} from 'react-bootstrap';

const style = {
  div: {
    margin: 20,
    border: "2px solid white",
    padding: 20
  }
}

const testData = {
  horizontal: "horizontal",
  rows: [{Name: "Souls", type: "number", col: [5,4,4,3,3,3]},
         {Name: "Orbs", type: "number", col: [5,4,4,3,3,3]},
         {Name: "Gabel", type: "number", col: [5,4,4,3,3,3]},
         {Name: "Total Runs", type: "number", col: [5,4,4,3,3,3]},
        ],
  buttons: [
        {Name: "Sign in",type: "submit", link: "", style: "default", size: "sm"},
        {Name: "Sign up",type: "", link: "/Signup", style: "default", size: "sm"},
        {Name: "Skip",type: "", link: "/Mainpage", style: "default", size: "sm"}
        ],
  dropdown: {
    title: "Epics: ",
    name: [ '2', '3']
  }
}
export default class InfoPanel extends React.Component {
   constructor(props){
    super(props);
    this.change = this.change.bind(this);
   };
   change(e, name) {
      this.props.func.fieldChange(name, e.target.value);
   };
   render() {
      return (
         <div style={style.div}>
            <div>
              <Form horizontal>
                <DropButtonComponent info={this.props.info.Epics}/>
                <FormComponent change={this.change}info={testData}/>
              </Form>
            </div>
            
         </div>
      );
   }
}
