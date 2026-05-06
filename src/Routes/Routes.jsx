import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Artistas from "../pages/Artistas/Artistas";
import Castings from "../pages/Castings/Castings";
import Contacto from "../pages/Contact/Contacto";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artistas" element={<Artistas />} />
      <Route path="/castings" element={<Castings />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default AppRoutes;