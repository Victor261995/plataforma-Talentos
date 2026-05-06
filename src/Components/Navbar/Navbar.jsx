import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarStyled, logoStyles } from './NavbarStyles';
//import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="Logo">
       {/* <Link to="/">
          <img src={Logo} alt="Agencia de baile" style={logoStyles} />
        </Link>*/}
      </div>

      <div className="Title">
        <h1>Agencia de Talentos</h1>
      </div>
   
     
      <div className="NavLinks">
        <Link to="/">Inicio</Link>
        <Link to="/artistas">Artistas</Link>
        <Link to="/castings">Castings</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </NavbarStyled>




  );
};

export default Navbar;