import React from 'react';
import { ButtonGroup, Button, Radio, FormGroup, Form} from 'react-bootstrap';
import FormComponent from '../../FormComponent.jsx';
import ButtonComponent from '../../ButtonComponent.jsx';
import InfoComponent from '../../InfoComponent.jsx';

const style = {
  div: {
    margin: 20,
    padding: "20px",
    border: "2px solid white",
   
  },
  topDiv: {
    backgroundColor: "#22",
    textAlign: "center"
  },
  botDiv: {
    textAlign: "center",
  },
  button: {
    margin: 10
  }
}

const itemCategory = {
  "Armor": ["Cloth", "Leather", "Light Armor", "Heavy Armor", "Plate Armor"],
  "Weapon": ["Slayer", "Gunner", "Fighter", "Mage", "Priest", "Theif", "Lancer"],
  "Acc": ["Bracelet", "Necklace", "Ring"],
  "Special": ["Sub Equipment", "Magic Stone", "Earring"]
}

const formInfo = {
    rows: [{Name: "Name", type: "text", col: [4,4,4,4,4,3]},
         {Name: "Comment", type: "text", col: [4,4,4,5,5,5]},
        ]
  ,
    buttons: [
        {Name: "Add",type: "", link: "", style: "default", size: "sm"},
        {Name: "Subtmit all",type: "", link: "", style: "default", size: "sm"},
        ]
}

export default class InsertPanel extends React.Component {
   constructor(props){
      super(props);
      this.state = {
        Mode: null,
        Level: 0,
        Type: null,
        Type2: null,
        Name: "",
        Comment: "",
        required: 0,
        addedRecords: 0
      }
      this.changeNameOrComment = this.changeNameOrComment.bind(this);
   }

   changeNameOrComment(e, name){
      if (name === "Name"){
        if (this.state.Name === ""){
          this.state.required++;
        }
        this.setState({
          Name: e.target.value
        })
      } else if (name === "Comment"){
        this.setState({
          Comment: e.target.value
        })
      }
   }

   changeType(e){
    if (this.state.Type === null){
        this.state.required++;
      }
      this.setState(
        {Type: e,
          Type2: null}
        );

   }

   changeMode(e){
      if (this.state.Mode === null){
        this.state.required++;
      }
      this.setState(
        {Mode: e}
        )
   }

    changeLevel(e){
      if (this.state.Level === 0){
        this.state.required++;
      }
      this.setState(
        {Level: e}
        )
   }

    changeType2(e){
      if (this.state.Type2 === null){
        this.state.required++;
      }
      this.setState(
        {Type2: e}
        )
   }

   render() {
      var extraType;
      if (this.state.Type != null){
          extraType = itemCategory[this.state.Type].map(function(val, index){
            return <Button key={index} onClick={() => this.changeType2(val)}>{val}</Button>
          }, this);
      }
      return (      
         <div style={style.div}>
            <InfoComponent info={this.props.info.Alert}/>

            <FormGroup style={style.topDiv}>
              <Radio name="radio" value="Normal" inline  onChange={() => this.changeMode("Normal")}>
                Normal
              </Radio>
              <Radio name="radio" value="Pan" inline onChange={() => this.changeMode("Pan")}>
                Pandomonium
              </Radio>
            </FormGroup>

       		  <FormGroup style={style.topDiv}>
              <Radio name="radio2" value="85" inline onChange={() => this.changeLevel(85)}>
                85
              </Radio>
              <Radio name="radio2" value="90" inline onChange={() => this.changeLevel(90)}>
                90
              </Radio>
            </FormGroup>

            <FormGroup style={style.topDiv}>
              <span>{this.state.Type}</span>
               <ButtonGroup>
                  <Button onClick={() => this.changeType("Armor")}  >Armor</Button>
                  <Button onClick={() => this.changeType("Weapon")}>Weapon</Button>
                  <Button onClick={() => this.changeType("Acc")}>Acc</Button>
                  <Button onClick={() => this.changeType("Special")}>Special</Button>
               </ButtonGroup><br/>
            </FormGroup>

            <FormGroup  style={style.topDiv}>
              <span>{this.state.Type2}</span>
              {extraType}
            </FormGroup>

            <Form horizontal>
              <FormComponent change={ this.changeNameOrComment} info={formInfo}/>
            </Form>

            <div style={style.botDiv}>
              <ButtonGroup>
                <Button onClick={() => this.validateAdd(this.state)} style={style.button}>Add</Button>
                <Button onClick={() => this.validateSubmit(this.state.addedRecords)}
                style={style.button}>Submit All</Button>
              </ButtonGroup>
            </div>

         </div>
      );
   }
   validateSubmit(){
      if (this.props.info.Epics["Total Runs"] > 0){
        this.props.func.submitAllClick(this.props.info.Epics.List);
        this.setState({
          addedRecords: 0
        });
      }
   }
   validateAdd(obj) {
      if (obj.required !== 5){
        this.props.func.addRecordClick(obj, false);
      } else {
        this.props.func.addRecordClick(obj, true);
        const num = this.state.addedRecords + 1;
        this.setState({
          Mode: this.state.Mode,
          Level: this.state.Level,
          Type: null,
          Type2: null,
          Name: this.state.Name,
          Comment: "",
          required: 3,
          addedRecords: num
        })
      }
   }
}
