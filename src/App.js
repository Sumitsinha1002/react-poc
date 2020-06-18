import React from 'react';
import Content from './content/content';
import Header from './header/header'
import './App.css';

class App extends React.Component {

  constructor() {

    super();

    this.state = {
      activeContent: 'Notes'
    }
  }
  handleNavOptions= (menu) => {
    this.setState(()=>{
      return {
        activeContent: menu
      }
    })
}

  render () {
    return (
    <div className="container">
      <Header handleNavOptions = {this.handleNavOptions} className="header"/>
      <Content activeContent = {this.state.activeContent} className="content"/>
    </div>
    );
  };
}

export default App;
