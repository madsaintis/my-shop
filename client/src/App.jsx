import './App.scss'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ItemPage from './pages/ItemPage';
import CharacterPage from './pages/CharacterPage';
import PetPage from './pages/PetPage';
import AddItemPage from './pages/AddItemPage';

function App() {
  return (
    <>
    <Header />
    <div className='body'>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/items/add-item" element={<AddItemPage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/pets" element={<PetPage />} />
      </Routes>
    </div>
    </>
  );
}

export default App
