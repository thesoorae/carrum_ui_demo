import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <img src={'./img/logo_large.svg'}></img>
        <div className="title">Welcome Wayn Enterprises Members</div>
        <img src={'./img/wane_logo.jpg'}></img>
      </div>
    );
  }
}

module.exports = Header;
