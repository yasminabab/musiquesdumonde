import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AppHeader from './components/header.js';
import AppFooter from './components/footer.js';
import Accueil from './components/hero.js';
import Mission from './components/mission.js';
import Rechercher from './components/rechercher.js';
import Forum from './components/forum.js';
import Thread from './components/thread.js';
import Playlist from './components/playlist.js';
import PlaylistDetails from './components/playlistDetails.js';
import Connexion from './components/connexion.js';
import Creation from './components/creation.js';
import Karaoke from './components/karaoke.js';
import Result from './components/result.js';

function App() {
  return (
    <>
      <AppHeader/>
      <div className="App">
          <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/accueil" element={<Accueil/>}/>
            <Route path="/mission" element={<Mission/>}/>
            <Route path="/rechercher" element={<Rechercher/>}/>
            <Route path="/forum" element={<Forum/>}/>
            <Route path="/forum/thread/:id" element={<Thread/>}/>
            <Route path="/playlist" element={<Playlist/>}/>
            <Route path="/playlist/:id" element={<PlaylistDetails/>}/>
            <Route path="/connexion" element={<Connexion/>}/>
            <Route path="/creation" element={<Creation/>}/>
            <Route path="/karaoke" element={<Karaoke/>}/>
            <Route path="/result" element={<Result/>}/>
          </Routes>
      </div>
      <AppFooter/>
    </>
  );
}

export default App;
