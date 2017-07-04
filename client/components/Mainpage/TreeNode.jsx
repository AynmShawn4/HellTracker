import React from 'react';

export default class TreeNode extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        visible: false,
      };
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({visible: !this.state.visible});
    }

    render() {
      var childNodes;
      if (this.props.node.childNodes != null){
        childNodes = this.props.node.childNodes.map(function(node, index){
          return <li key={index}><TreeNode node={node} /></li>
        })
      }

      var style={
        div: {
          border: "1px solid black",
          padding: "5px",
          backgroundColor: "rgba(210,200,200,0.8)"
        }
      };
      if (!this.state.visible){
        style.display = "none";
      }
      return (
         <div style={style.div}>
            <p onClick={this.toggle}>
              {this.props.node.title}
            </p>
            <ul style={style}>
              {childNodes}
            </ul>

         </div>
      );
   }
}
