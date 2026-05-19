import styled, { css } from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #111111;
    color: white;
`;

export const FormWrapper = styled.div`
    background-color: #1a1a1a;
    padding: 40px;
    border-radius: 20px;
    border: 1px solid #333;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;

    h2 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

export const Label = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
    color: #9ca3af;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #000;
  border: 1px solid #333;
  color: white;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #ff7a00;
  }
`;

export const RoleGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

export const CardLabel = styled.label`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
  border: 1px solid #333;
  background-color: transparent;

  ${(props) => props.$active && css`
    border: 1px solid #ff7a00;
    background-color: rgba(255, 122, 0, 0.1);
  `}

  span {
    display: block;
    font-weight: bold;
  }

  h6 {
    margin: 0;
    font-weight: normal;
    color: #888;
  }
`;

export const SubmitButton = styled.button`
  padding: 15px;
  cursor: pointer;
  border-radius: 999px;
  background-color: #ff7a00;
  color: black;
  border: none;
  font-weight: bold;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background-color: #ff9500;
  }
`;