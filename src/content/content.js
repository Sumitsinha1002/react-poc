import React, { Fragment } from 'react';
import Note from './notes/notes'
import './content.scss'

class Content extends React.Component{
  constructor() {
    super();
    this.state = {
      notesData: localStorage.notesData ?JSON.parse(localStorage.notesData) : []
    }
    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote = () => {
    this.setState({ notesData: [...this.state.notesData, {id: Math.floor(Math.random() * 10000) , text: 'Demo Text', title: 'Demo Title'}] });
  }

  updateNote = note => {
    console.log(note);
    this.setState(prev => ({
        notesData: prev.notesData.map(item => item.id === note.id ? { id: note.id, text: note.text, title: note.title } : item)
    }))
  }

  deleteNote = id => {
    console.log(id);
    this.setState({notesData: this.state.notesData.filter(function(note) {
      return note.id !== id
  })});
  }

  render() {
    console.log(this.state);
    let componentName = "content";
    localStorage.notesData = JSON.stringify(this.state.notesData);
    var notesList = this.state.notesData.map(
        (note)=>
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          updateNote={this.updateNote}
          deleteNote={this.deleteNote}
        />);
    return(
      <div className={`${componentName}`}>
        { this.props.activeContent === 'Notes' &&
          <Fragment>
          <button className={`${componentName}__button`} onClick={this.addNote}>Add Note</button>
          </Fragment> }
        { this.props.activeContent==='Notes' && this.state.notesData.length>0 &&
          notesList}
        { this.props.activeContent==='Notes' && this.state.notesData.length===0 &&
          <Fragment>
          <div className={`${componentName}__no-data`}></div>
          <p className={`${componentName}__message`}>No Notes found. Click Add Note to add one</p>
          </Fragment> }
      </div>
    )
  }
}

export default Content;