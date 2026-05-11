// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

import {
  NavbarStyled,
  Left,
  LogoCircle,
  Title,
  NavLinks,
  Buttons,
  LoginButton,
  RegisterButton,
  MobileButton,
} from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarStyled>
      <Left>
        {/*<LogoCircle>T</LogoCircle>*/}

        <Title>
          <h1>Talent Connect</h1>
          <span>CASTINGS & ARTISTS</span>
        </Title>
      </Left>

      <NavLinks>
        <Link to="/">Inicio</Link>
        <Link to="/artistas">Artistas</Link>
        <Link to="/castings">Castings</Link>
        <Link to="/contacto">Contacto</Link>
      </NavLinks>

      <Buttons>
        <LoginButton>Login</LoginButton>

        <RegisterButton>Registrarse</RegisterButton>
      </Buttons>

      <MobileButton>☰</MobileButton>
    </NavbarStyled>
  );
};

export default Navbar;