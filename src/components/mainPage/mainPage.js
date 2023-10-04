import AppHeader from "./appHeader/AppHeader"
import AddNotes from "./main/addNotes/addNotes"
import NoteList from "./main/noteList/noteList"


const MainPage = () => {
    return (
        <div>
            <AppHeader/>
            <AddNotes/>
            <NoteList/>
        </div>

    )
}

export default MainPage;