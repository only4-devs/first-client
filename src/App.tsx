import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FurnitureStorePage } from './pages/FurnitureStorePage';
import { CatalogPage } from './pages/CatalogPage';
import { AboutUsPage } from './pages/AboutUsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/" element={<FurnitureStorePage />} />
        <Route path="/sobre-nosotros" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
