import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header';
import Progress from './js/progress_section/progress';
import PatientTasks from './js/patient';
import ConciergeTasks from './js/concierge';


class Root extends React.Component {
  constructor(){
    super();
    this.patient = {
      tasks:[
        {
          title: "Discharge appointment",
          action: "Prepare for your appointment"
        }
      ],
      concierge:{
          title: "Awaiting your action",
          name: "Jenny K."
      },
      steps:{
        first: {
          progress: 0.75,
          current: "Medical records collection"
        },
        second: {
          progress:.8,
          current: "Medical records collection"
        },
        third:{
          progress: .85,
          current: "Discharge"
        },
        fourth:null

      }

    };
  }
  render() {
    return(

      <div className="container">
        <Header />
          <div className = "app">
            <Progress steps={this.patient.steps}/>

          <div className = "bottom">
            <PatientTasks tasks={this.patient.tasks}/>
            <ConciergeTasks task={this.patient.concierge}/>
          </div>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
