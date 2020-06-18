import React from 'react';
import './navbar.scss'

class Navbar extends React.Component{

  constructor(props) {
    super(props);
    this.onMenuClicked = this.onMenuClicked.bind(this);
  }

  onMenuClicked(e) {
    this.props.handleNavOptions(e.target.text);
  }

  render() {
    var componentName = "sidenav";
    return(
      <div className= {`${componentName}`}>
        <a onClick = {this.onMenuClicked}>Notes</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    )
  }
}

export default Navbar;