import React from 'react';
import ProgressContents from './progress_contents';

class Progress extends React.Component{
constructor(props){
  super(props);
  this.state = {
    current: props.current,
  };
  this.steps = props.steps;
}
shouldComponentUpdate(nextProps){
  if(nextProps.current != this.state.current){
    return true;
  } else{
    return false;
  }
}
componentWillUpdate(nextProps){
  this.setState({current: nextProps.current});
}
  render(){
  const steps = this.steps;
  const stepDetails = steps[this.state.current];
  let currentlyPerforming = stepDetails.stepAction;
  let percent = stepDetails.percent * 100;
  let step1 = this.state.current == "first" ? "show" : "";
  let step2 = this.state.current == "second" ? "show" : "";
  let step3 = this.state.current == "third" ? "show" : "";
  let step4 = this.state.current == "fourth" ? "show" : "";

  return(

<div className="progress-sec-container">
  <div className={`progress-sec ${this.state.current}`}>
    <div className="first-step step" onClick={()=>{this.props.update('first');}}>
      <ProgressContents show={step1} title={"1. Program Qualification"} details={stepDetails}/>
    </div>

    <div className="second-step step" onClick={()=>{this.props.update('second');}}>

      <ProgressContents show={step2} title={"2. Pre-Admission Preparation"} details={stepDetails}/>
  </div>
<div className="third-step step" onClick={()=>{this.props.update('third');}}>

  <ProgressContents show={step3} title={"3. Hospital Stay"} details={stepDetails}/>
  </div>
<div className="fourth-step step" onClick={()=>{this.props.update('fourth');}}>
  <ProgressContents show={step4} title={"3. Post-Discharge Activities"} details={stepDetails}/>
  </div>
  <div className="current-step"><i className="fa fa-arrow-right" aria-hidden="true"></i>
<strong>Currently performing: </strong>{currentlyPerforming} </div>
    </div>
  </div>
);
}
}

module.exports = Progress;
