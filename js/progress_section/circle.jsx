import React from 'react';
import { Line, Circle } from 'rc-progress';


class PercentCircle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      percent: props.percent
    };
  }
render(){
  return(
  <div className="percent-circle">
    <Circle
      percent={this.state.percent}
      className="prog-circ"
      strokeWidth="15" trailWidth="15"
      strokeLinecap="square" trailColor="#acdbfe" strokeColor="#065999" />
    <div className="percent-text">
      {`${this.state.percent}%`}
    </div>
  </div>
  );
}
}

module.exports = PercentCircle;
