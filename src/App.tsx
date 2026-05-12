import { Routes, Route } from 'react-router-dom';
import { FurnitureStorePage } from './pages/FurnitureStorePage';
import { AboutUsPage } from './pages/AboutUsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FurnitureStorePage />} />
      <Route path="/sobre-nosotros" element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
