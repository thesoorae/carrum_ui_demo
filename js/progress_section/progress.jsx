import React from 'react';
import ProgressContents from './progress_contents';

class Progress extends React.Component{
constructor(props){
  super(props);
  this.state = {
    currentStep: "first",
    allSteps: props.steps
  };
  this.changeStep = this.changeStep.bind(this);
}

changeStep(step){
  this.setState({currentStep: step});
}
render(){
  const steps = this.state.allSteps;
  const stepDetails = steps[this.state.currentStep];
  let currentlyPerforming = stepDetails.current;
  let percent = stepDetails.progress * 100;
  let step1 = this.state.currentStep == "first" ? "show" : "";
  let step2 = this.state.currentStep == "second" ? "show" : "";
  let step3 = this.state.currentStep == "third" ? "show" : "";
  let step4 = this.state.currentStep == "fourth" ? "show" : "";

  return(

<div className="progress-sec-container">
  <div className={`progress-sec ${this.state.currentStep}`}>
    <div className="first-step step" onClick={()=>{this.changeStep('first');}}>
      <ProgressContents show={step1} title={"1. Program Qualification"} details={stepDetails}/>
    </div>

    <div className="second-step step" onClick={()=>{this.changeStep('second');}}>

      <ProgressContents show={step2} title={"2. Pre-Admission Preparation"} details={stepDetails}/>
  </div>
<div className="third-step step" onClick={()=>{this.changeStep('third');}}>

  <ProgressContents show={step3} title={"3. Hospital Stay"} details={stepDetails}/>
  </div>
<div className="fourth-step step" onClick={()=>{this.changeStep('fourth');}}>
  <ProgressContents show={step4} title={"3. Post-Discharge Activities"} details={stepDetails}/>
  </div>
  <div className="current-step"><i className="fa fa-arrow-right" aria-hidden="true"></i>
<strong>Currently performing:</strong> {currentlyPerforming}</div>
    </div>
  </div>
);
}
}

module.exports = Progress;
