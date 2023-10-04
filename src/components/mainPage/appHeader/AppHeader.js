import './header.css';

import note from '../../../resources/img/note.png';
import settings from '../../../resources/img/settings.png';

const AppHeader = ()=>{
    return(
        <header>
            <a href="/"><img src= {note} alt="note" /></a>
            <img className = "settings" src={settings} alt="settings" />
        </header>
        )
    
}





export default AppHeader;