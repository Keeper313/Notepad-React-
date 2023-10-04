import './noteList.css'
import { useNavigate } from 'react-router-dom';

const NoteList = () => {
    const navigate = useNavigate();
    let note = "";
    let existingNotesJSON = localStorage.getItem("notes");
    let existingNotes = JSON.parse(existingNotesJSON);

    const deleteNote = (id) => {
        if (existingNotes) {
            const updatedNotes = existingNotes.filter((note) => note.id !== id);
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            window.location.reload();
        }
    }

    if (existingNotes === null) {
    }
    else {
        note = existingNotes.map((element) => {
            return (
                <div className="notepad_block" key={element.id}>
                    <div className="text_block">
                        <ul>
                            <li>
                                <h2>
                                    {element.name}
                                </h2>
                            </li>
                            <li className='deleted_notate' onClick={()=>deleteNote(element.id)}>
                                X
                            </li>

                        </ul>

                        <p onClick={() => navigate(`/secondPage/${element.id}`)}>
                            {element.text}
                        </p>
                    </div>
                    <span>
                        {element.date}
                    </span>
                </div>
            )
        });
    }
    return (
        <section className="note_List">
            {note}
        </section>
    )
}




export default NoteList;