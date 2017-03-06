import React from 'react';
import Task from './task';
class PatientTasks extends React.Component{
  constructor(props){
    super(props);
    this.tasks = props.tasks;

  }
render(){
  console.log(this.tasks);
  const tasks = this.tasks.map((task)=>{
    return <Task task={task}/>;
  });
  return(
    <div className="task-box">
      <div className="gray-title">
        My next steps
      </div>
      {tasks}
    </div>
  );
}
}

module.exports = PatientTasks;
