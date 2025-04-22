// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Plantillas/Navbar';
import Banner from './Atoms/Banner';
import Footer from './Plantillas/Footer';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Banner />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
