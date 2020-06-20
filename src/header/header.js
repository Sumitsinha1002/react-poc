import React from 'react';
import './header.scss'
import Navbar from '../navbar/navbar';


class Header extends React.Component{

  constructor() {
    super();
    this.state = {
      isNavbarHidden: true
    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState(prevState => {
      return {
        isNavbarHidden: !prevState.isNavbarHidden
      }
    })
  }
  render() {
    var componentName = "header";
    return(
      <div className={`${componentName}__container`}>
        <i className={`${componentName}__icon ${this.state.isNavbarHidden?`${componentName}__menu`:`${componentName}__close`}`} onClick={this.toggleNavbar}></i>

        { !this.state.isNavbarHidden && <Navbar handleNavOptions = {this.props.handleNavOptions}/> }
      </div>
    )
  }
}

export default Header;