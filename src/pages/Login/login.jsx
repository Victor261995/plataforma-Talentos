import { useState } from "react";
import axios from "axios";

import {
  Container,
  FormWrapper,
  Form,
  Label,
  Input,
  SubmitButton,
  RedirectText,
  StyledLink
} from "./LoginStyles";

import { useNavigate } from "react-router-dom";

export function Login() {

  const navigate = useNavigate();

  const [formObject, setFormObject] = useState({
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormObject({
      ...formObject,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        formObject
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login exitoso");

      navigate("/");

    } catch (error) {

      console.log(error.response?.data);

      alert("Credenciales incorrectas");
    }
  };

  return (
    <Container>
      <FormWrapper>

        <Form onSubmit={handleSubmit}>

          <h2>Bienvenido</h2>

          <h3>
            Entra a tu cuenta para continuar
          </h3>

          <Label>Email</Label>

          <Input
            name='email'
            type="email"
            onChange={changeHandler}
          />

          <Label>Contraseña</Label>

          <Input
            name='password'
            type="password"
            onChange={changeHandler}
          />

          <SubmitButton type="submit">
            Entrar
          </SubmitButton>

          <RedirectText>
            ¿No tienes cuenta?

            <StyledLink to="/registro">
              Regístrate
            </StyledLink>

          </RedirectText>

        </Form>

      </FormWrapper>
    </Container>
  );
}

export default Login;