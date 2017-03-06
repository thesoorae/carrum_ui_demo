import React from 'react';
import Circle from './circle';
import TextWidget from './text_widget';

class Progress extends React.Component{
constructor(){
  super();
  this.state = {
    currentStep: "first"
  };
  this.changeStep = this.changeStep.bind(this);
}

changeStep(step){
  this.setState({currentStep: step});
}
render(){
    return(

<div className="progress-sec-container">
  <div className={`progress-sec ${this.state.currentStep}`}>
    <div className="first-step step" onClick={()=>{this.changeStep('first');}}>
      <div className="step-title">1. Program Qualification</div>
    </div>
    <div className="second-step step" onClick={()=>{this.changeStep('second');}}>
      <div className="step-title">2. Pre-Admission Preparation </div>
  </div>
<div className="third-step step" onClick={()=>{this.changeStep('third');}}>
  <div className="step-title">3. Hospital Stay </div>

  </div>
<div className="fourth-step step" onClick={()=>{this.changeStep('fourth');}}>
  <div className="step-title">3. Post-Discharge Activities</div>

  </div>
    <TextWidget step={this.state.currentStep} steps ={this.props.steps}/>
    </div>
  </div>
);
}
}

module.exports = Progress;
