import { Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, MarvelPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
