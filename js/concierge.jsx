import React from 'react';
import Task from './task';


class ConciergeTasks extends React.Component{
  constructor(props){
    super(props);
    this.task = {
      title: props.task.title,
      action: ""};
    this.name = props.task.name;

  }
render(){

  return(
    <div className="task-box">
      <div className="gray-title">
        My Care concierge
      </div>
      <div className="concierge-top">
        <div className="concierge-avatar">
          <img className="avatar" src={'./img/Jenny.png'}/>
          <div className="name">{this.name}</div>
        </div>

        <div className="concierge-task">
          <div className="subtitle">
            Currently assisting with:
            </div>
            <Task task={this.task}/>
        </div>
      </div>

        <div className="concierge-bottom">
          <div className="icon">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            Message
          </div>
          <div className="icon">
            <i className="fa fa-phone" aria-hidden="true"></i>
            Call
          </div>
        </div>
    </div>
  );
}
}


module.exports = ConciergeTasks;
