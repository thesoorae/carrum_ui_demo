import React from 'react';

class Task extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.task.title,
      action: props.task.action
  };
}

  componentWillUpdate(nextProps){
    this.setState({
      title: nextProps.task.title,
      action: nextProps.task.action
    });
  }
render(){

  return(
    <div className="task">
      <div className="task-title">
        <i className="fa fa-caret-right fa-lg" aria-hidden="true"></i>
        <div className="title">{this.state.title}</div>
      </div>
      <a href="#" onClick={()=>{this.props.complete(this.props.current);}}>{this.state.action}</a>
    </div>
  );
}
}

module.exports = Task;
