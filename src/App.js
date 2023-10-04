import { Route, Routes } from 'react-router-dom';

import MainPage from "./components/mainPage/mainPage"
import SecondPage from './components/secondPage/secondPaje';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exath path="/" element={<MainPage/>} />
                <Route path="/secondPage/:id" element={<SecondPage />} />
            </Routes>
        </div>
    );
}

export default App;