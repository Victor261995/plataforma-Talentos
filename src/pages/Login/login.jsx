import { useState } from "react";
import { Container, FormWrapper, Form, Label, Input, SubmitButton, RedirectText, StyledLink } from "./LoginStyles";

export function Login() {
  const [formObject, setFormObject] = useState({
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormObject({ ...formObject, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos listos para enviar:", formObject);
  };

  return (
      <Container>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <h2>Bienvenido</h2>
            <h3>Entra a tu cuenta para continuar</h3>
            
            <Label>Email</Label>
            <Input name='email' type="email" onChange={changeHandler}/>

            <Label>Contraseña</Label>
            <Input name='password' type="password" onChange={changeHandler}/>

            <SubmitButton type="submit">Entrar</SubmitButton>
            
            <RedirectText>
              ¿No tienes cuenta?
              <StyledLink to="/registro">Regístrate</StyledLink>
            </RedirectText>
          </Form>
        </FormWrapper>
      </Container>
  );
}

export default Login;