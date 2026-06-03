import { useState } from "react";
import axios from "axios";

import {
  Container,
  FormWrapper,
  Form,
  Label,
  Input,
  RoleGroup,
  CardLabel,
  SubmitButton,
  RedirectText,
  StyledLink,
} from "./RegisterStyles";

export function Register() {
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    password: "",
    role: "artist",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormObject({
      ...formObject,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/register",
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

    alert("Usuario creado");

  } catch (error) {
    console.log(error.response?.data);

    alert("Error");
  }
};
  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <h2>Crea tu cuenta</h2>

          <Label>Nombre completo</Label>

          <Input
            name="name"
            onChange={changeHandler}
          />

          <Label>Email</Label>

          <Input
            name="email"
            type="email"
            onChange={changeHandler}
          />

          <Label>Contraseña</Label>

          <Input
            name="password"
            type="password"
            onChange={changeHandler}
          />

          <Label>Soy</Label>

          <RoleGroup>
            <CardLabel $active={formObject.role === "artist"}>
              <input
                type="radio"
                name="role"
                value="artist"
                onChange={changeHandler}
                style={{ display: "none" }}
              />

              <span>Artista</span>

              <h6>Busco oportunidades</h6>
            </CardLabel>

            <CardLabel $active={formObject.role === "producer"}>
              <input
                type="radio"
                name="role"
                value="producer"
                onChange={changeHandler}
                style={{ display: "none" }}
              />

              <span>Productor</span>

              <h6>Publico castings</h6>
            </CardLabel>
          </RoleGroup>

          <SubmitButton type="submit">
            Crear cuenta
          </SubmitButton>

          <RedirectText>
            ¿Ya tienes cuenta?

            <StyledLink to="/login">
              Entra
            </StyledLink>
          </RedirectText>
        </Form>
      </FormWrapper>
    </Container>
  );
}

export default Register;