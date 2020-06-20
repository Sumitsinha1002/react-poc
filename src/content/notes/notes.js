import React, { Fragment } from 'react';
import './note.scss'


class Note extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        note : {
        title: this.props.title,
        text: this.props.text,
        id: this.props.id
        }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
}

  handleChange = event => {
    const {name,value} = event;
    this.setState(prevState => ({
        note: {
          ...prevState.note,
          [name]: value
        }
      }));

  }

  handleBlur() {
    this.props.updateNote(this.state.note);
  }

  deleteNote(id) {
    this.props.deleteNote(this.state.note.id);
  }

  render() {
    var componentName = "note";
    const {title, text, id} = this.state.note;
    return(
      <Fragment>
        <li className={`${componentName}`} onBlur={this.handleBlur}>
          <textarea defaultValue={title} name="title" onChange = {this.handleChange} className = {`${componentName}__title`}></textarea>
        <textarea
          defaultValue = {text}
          name = "text"
          className = {`${componentName}__text`}
          onChange = {this.handleChange}>
        </textarea>
        <i className={`${componentName}__delete`} onClick = {()=>this.deleteNote(id)}></i>
        </li>

      </Fragment>
    )
  }
}

export default Note;