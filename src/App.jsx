// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import Blog from './components/Pages/Blog';

function App() {
  return (
    <Routes>
      {/* Ruta padre: todo lo que esté dentro de Layout */}
      <Route path="/" element={<Layout />}>
        {/* Ruta index = “/” */}
        <Route index element={<Home />} /> 
        <Route path="Home" element={<Home />} />
        {/* /about-us */}
        <Route path="AboutUs" element={<AboutUs />} />
        {/* /blog */}
        <Route path="Blog" element={<Blog />} />
        {/* Opcional: página 404 */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
