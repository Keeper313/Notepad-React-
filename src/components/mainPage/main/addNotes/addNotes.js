import { Component } from 'react';
import './addNotes.css'
import '../../../../style/button.css'

import NoteService from '../../../../services/noteService';

class AddNotes extends Component {
    state = {
        inputValue: '',
        textAreaValue: ''
    };

    noteService = new NoteService();

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };
    handleTextAreaChange = (event) => {
        this.setState({ textAreaValue: event.target.value });
    };

    updateNote = (e) => {
        e.preventDefault();
        this.noteService.addNote(this.state.inputValue, this.state.textAreaValue);
        this.setState({
            inputValue: '',
            textAreaValue: ''
        });

    }

    render() {
        return (
            <section className="add_Notes">
                <form onSubmit={this.updateNote} >
                    <p>Create new note</p>
                    <input type="text" placeholder='Subject' value={this.state.inputValue} onChange={this.handleInputChange} required></input>
                    <textarea name="" id="" placeholder='Note' cols="30" rows="5" value={this.state.textAreaValue} onChange={this.handleTextAreaChange} required></textarea>
                    <button type="submit">Submit</button>
                </form>

            </section>
        )
    }
}

export default AddNotes