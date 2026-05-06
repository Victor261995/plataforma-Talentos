import styled from 'styled-components';

export const NavbarStyled = styled.nav`
  background-color: black;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 20px;
  
  & .NavLinks {
    display: flex;
    gap: 20px;
  }

  & .NavLinks a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: 0.3s;
  }

  & .NavLinks a:hover {
    color: gray;
  }

  & .Title {
    font-family: 'Pacifico', cursive;
    font-size: 30px;

    @media (max-width: 900px) {
      font-size: 15px;
    }
  }
`;

export const logoStyles = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
};

