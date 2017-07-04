import React from 'react';

const style = {
  div: {
    margin: "20px",
    border: "1px solid black",
    padding: "20px"
  }

}
export default class SummarySection extends React.Component {
    render() {
      return (
        <div style={style.div}> 
            <p>Test 1: </p>
            <p>Test 2: </p>
            <p>Test 3: </p>
        </div>
      );
    }
}
