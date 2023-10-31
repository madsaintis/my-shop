import './App.scss'
import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ItemPage from './pages/ItemPage';
import CharacterPage from './pages/CharacterPage';
import PetPage from './pages/PetPage';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/pets" element={<PetPage />} />
      </Routes>
    </>
  );
}

export default App
