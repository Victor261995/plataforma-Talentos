import { Link } from "react-router-dom";
import styled from "styled-components";

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
        margin-bottom: 5px;
        text-align: center;
    }

    h3 {
        font-size: 14px;
        font-weight: normal;
        color: #9ca3af;
        margin-bottom: 25px;
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

export const RedirectText = styled.p`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 14px;
  margin-top: 20px;
  color: #888;
`;

export const StyledLink = styled(Link)`
  color: #ff7a00;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;