import React from 'react';
import Task from './task';
class PatientTasks extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current: props.current
    };
    this.tasks = props.tasks;
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

  let currentTask = this.tasks[this.state.current];
  return(
    <div className="task-box">
      <div className="gray-title">
        My next steps
      </div>
      <Task task={currentTask} complete={this.props.goToNext} current={this.state.current}/>
    </div>
  );
}
}

module.exports = PatientTasks;
