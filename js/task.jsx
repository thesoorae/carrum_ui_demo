import React from 'react';

class Task extends React.Component{
  constructor(props){
    super(props);
    this.title = props.task.title;
    this.action = props.task.action;
  }
render(){

  return(
    <div className="task">
      <div className="task-title">
        <i className="fa fa-caret-right fa-lg" aria-hidden="true"></i>
        <div className="title">{this.title}</div>
      </div>
      <a href="#">{this.action}</a>
    </div>
  );
}
}

module.exports = Task;
