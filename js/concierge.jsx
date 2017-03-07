import React from 'react';
import Task from './task';


class ConciergeTasks extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current: props.current
    };
    this.tasks = props.tasks;
    this.name = props.name;
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
  let currentTask = {
    title: this.tasks[this.state.current],
    action: ""
  };
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
            <Task task={currentTask}/>
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
