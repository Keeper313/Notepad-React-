

class NoteService {
    
    date = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');

        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        const monthIndex = today.getMonth();
        const year = today.getFullYear();

        const formattedDate = `${day} ${months[monthIndex]} ${year}`;
        return formattedDate;
    }

    addNote = (name, text) => {
    
        let existingNotesJSON = localStorage.getItem("notes");
        let existingNotes = JSON.parse(existingNotesJSON) || [];

        let newNote = {
            name: name,
            text: text,
            id: existingNotes.length + 1,
            date: this.date()
        }

        existingNotes.push(newNote)
        let updatedNotesJSON = JSON.stringify(existingNotes);
        localStorage.setItem("notes", updatedNotesJSON);
    }

}



export default NoteService;