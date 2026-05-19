import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FormWrapper, Form, Label, Input, RoleGroup, 
    CardLabel, SubmitButton } from "./RegisterStyles";

export function Register() {
    const [formObject, setFormObject] = useState({
        nombre: "",
        email: "",
        password: "",
        role: "artista"
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        
        setFormObject({ ...formObject, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Datos listos para enviar:", formObject);
    };

    return (
        <Container>
            
            <FormWrapper>
                
                <Form onSubmit={handleSubmit}>
                    <h2>Crea tu cuenta</h2>
                    
                    <Label>Nombre completo</Label>
                    <Input name='nombre' onChange={changeHandler} />

                    <Label >Email</Label>
                    <Input name='email' type="email" onChange={changeHandler} />

                    <Label >Contraseña</Label>
                    <Input name='password' type="password" onChange={changeHandler} />

                    <Label>Soy</Label>

                    <RoleGroup>
                        {/* TARJETA ARTISTA */}
                        <CardLabel $active={formObject.role === "artista"}>
                            <input 
                                type="radio" 
                                name="role" 
                                value="artista" 
                                onChange={changeHandler} 
                                style={{ display: "none" }}
                            />
                            <span>Artista</span>
                            <h6>Busco oportunidades</h6>
                        </CardLabel>

                        {/* TARJETA PRODUCTOR */}
                        <CardLabel $active={formObject.role === "productor"}>
                            <input 
                                type="radio" 
                                name="role" 
                                value="productor" 
                                onChange={changeHandler} 
                                style={{ display: "none" }} 
                            />
                            <span>Productor</span>
                            <h6>Publico castings</h6>
                        </CardLabel>
                    </RoleGroup>

                    <SubmitButton type="submit">Crear cuenta</SubmitButton>

                    <p style={{ display: "flex", justifyContent: "center", color: "#888", gap: "5px", fontSize: "14px", marginTop: "20px" }}>
                        ¿Ya tienes cuenta?
                        <Link to="/login" style={{ color: "#d4a373", textDecoration: "none", fontWeight: "bold" }}>Entra</Link>
                    </p>
                </Form>
            </FormWrapper>
            
        </Container>
    );
}

export default Register;