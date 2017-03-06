import React from 'react';
class ProgressContents extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      show: props.show,
      details: props.details
    };
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.show != this.state.show){
    return true;
  }else{
    return false;
  }
  }
  componentWillUpdate(nextProps){
    this.setState({
      show: nextProps.show,
      details: nextProps.details
    });

  }
  render(){
    let showClass = `progress-contents ${this.state.show}`;
    const percentCircle = this.state.show == "" ? "" : this.state.details.progress ;
    return(
      <div className={showClass}>
        <sk-progress status="75" />
        <div className="percent">
          {percentCircle}
        </div>
        <div className="step-title">
        {this.state.title}
      </div>
      </div>
    );
  }
}

module.exports = ProgressContents;
