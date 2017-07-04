import React from 'react';
import TreeNode from './TreeNode.jsx';
import Summary from './SummarySection.jsx';

const style = {
	div: {
		backgroundColor: "rgba(199,200,200,0.6)"
	},
  tree: {
    margin: 20,
    height: "60vh",
    maxHeigh: 600,
    overflow: "scroll"
  }
};

const testTree = {
  title: "test1",
  childNodes: [
    {title: "test2"},
    {title: "suzie", childNodes: [
      {title: "test3", childNodes: [
        {title: "dog house"}
      ]},
      {title: "cherry tree"}
    ]}
  ]
};
export default class LeftPanel extends React.Component {
   render() {
      return (
         <div style={style.div}>
          <div style={style.tree}>
       		 <TreeNode node={testTree} />
          </div>
       		<Summary/>
         </div>
      );
   }
}
