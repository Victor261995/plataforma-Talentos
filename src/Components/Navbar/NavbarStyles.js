import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100%;
  height: 90px;
  padding: 0 50px;

  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #242424;

  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 900px) {
    padding: 0 20px;
    height: 80px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const LogoCircle = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;

  background: linear-gradient(135deg, #ff7a00, #ff9500);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 900;
  color: black;

  box-shadow: 0 0 25px rgba(255, 122, 0, 0.35);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 1px;
    color: white;
  }

  span {
    font-size: 0.8rem;
    color: #9ca3af;
    letter-spacing: 2px;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 1rem;
    }

    span {
      font-size: 0.65rem;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    color: #d1d5db;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;

    padding: 10px 18px;
    border-radius: 999px;

    transition: 0.3s ease;
  }

  a:hover {
    background: #1f1f1f;
    color: white;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  background: transparent;
  border: 1px solid #333;
  color: white;

  padding: 12px 22px;
  border-radius: 999px;

  font-weight: 600;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: white;
    color: black;
  }
`;

export const RegisterButton = styled.button`
  background: #ff7a00;
  border: none;
  color: black;

  padding: 12px 24px;
  border-radius: 999px;

  font-weight: 700;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #ff9500;
    transform: translateY(-2px);
  }
`;

export const MobileButton = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: flex;

    background: #1f1f1f;
    border: 1px solid #333;
    color: white;

    width: 45px;
    height: 45px;

    border-radius: 12px;

    align-items: center;
    justify-content: center;

    font-size: 1.2rem;
    cursor: pointer;
  }
`;