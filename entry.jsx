import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header';
import Progress from './js/progress_section/progress';
import PatientTasks from './js/patient';
import ConciergeTasks from './js/concierge';

const data = {
    first: {
      progress:{
        percent: 0.75,
      stepAction: "Medical records collection"
    },
      patientTask:{
        title: "Complete medical records release form",
        action: "Complete"
      },
      conciergeTask: "Awaiting your action"
    },
    second: {
      progress:{
        percent:.8,
      stepAction: "Medical records collection"
    },
      patientTask:{
        title: "Well done! You have no outstanding tasks",
        action: "None"
      },
      conciergeTask: "Collecting records from providers"
    },
    third:{
      progress:{
        percent: .85,
      stepAction: "Discharge"
    },
      patientTask:{
        title: "Discharge appointment",
        action: "Prepare for your appointment"
      },
      conciergeTask: "Awaiting your action"
    },
    fourth:{
    progress:{
      percent: 0,
    stepAction: "None to display"
  },
    patientTask:{
      title: "None to display",
      action: "None"
    },
    conciergeTask: "Awaiting your action"
  }
};
class Root extends React.Component {
  constructor(){
    super();
    this.state = {
      current: "first"
    };
    this.patient = data;
    this.update = this.update.bind(this);
  }

  update(step, completedStep){
    this.setState({
      current: step,
      });
  }
  render() {
    let stepProgress = {};
    let patientTasks = {};
    let conciergeTasks = {};
    for(let key in this.patient){
      stepProgress[key] = this.patient[key].progress;
      patientTasks[key] = this.patient[key].patientTask;
      conciergeTasks[key] = this.patient[key].conciergeTask;
    }

    return(

      <div className="container">
        <Header />
          <div className = "app">
            <Progress steps={stepProgress} update={this.update} current={this.state.current}/>

            <div className = "bottom">
            <PatientTasks tasks={patientTasks} update={this.update} current={this.state.current}/>
            <ConciergeTasks tasks={conciergeTasks} current={this.state.current} name="Jenny K"/>
          </div>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
