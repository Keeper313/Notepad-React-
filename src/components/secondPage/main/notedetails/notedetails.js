import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./notedetails.css"

const Notedetails = () => {
    const { id } = useParams();

    const noteItemJSON = localStorage.getItem("notes");
    const noteItem = JSON.parse(noteItemJSON);

    const foundNotes = noteItem.filter(note => note.id === parseInt(id));

    const note = foundNotes[0];

    const copyNotate = () => {
        const textArea = document.createElement("textarea");
        textArea.value = note.text;
        document.body.appendChild(textArea);
        textArea.select();
        alert("Text is copied")
        document.execCommand("copy");
        document.body.removeChild(textArea);
    }


    const [isBlackStyle, setIsBlackStyle] = useState(false);
    const [editableText, setEditableText] = useState(note.text);

    const editeNote = () => {
        setIsBlackStyle(!isBlackStyle);
    
        if (isBlackStyle) {
            const updatedNoteItem = noteItem.map((item) => {
                if (item.id === note.id) {
                    return { ...item, text: editableText };
                }
                return item;
            });
            let updatedNotesJSON = JSON.stringify(updatedNoteItem);
            localStorage.setItem("notes", updatedNotesJSON);
    
        }
    }

    return (
        <section className="note_detail">
            <main>
                <h2>{note.name}</h2>
                <textarea
                    value={editableText}
                    cols="95"
                    rows="40"
                    onChange={(e) => setEditableText(e.target.value)}
                    readOnly={!isBlackStyle}
                ></textarea>
            </main>
            <div>
                <ul>
                    <li>
                        <button
                            onClick={() => editeNote(id)}
                            className={isBlackStyle ? 'button_active' : 'button_inactive'}
                        >
                            Edite Note
                        </button>
                        <button onClick={copyNotate}>Copy to clipboard</button>
                    </li>
                    <li>
                        <p>{note.date}</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Notedetails;