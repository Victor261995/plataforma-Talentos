import { useState } from "react";
import { Link } from "react-router-dom";

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

    const cardStyle = (roleName) => ({
        flex: 1,
        padding: "20px",
        border: formObject.role === roleName ? "1px solid #d4a373" : "1px solid #333",
        borderRadius: "10px",
        cursor: "pointer",
        textAlign: "center",
        backgroundColor: formObject.role === roleName ? "rgba(212, 163, 115, 0.1)" : "transparent",
        transition: "0.3s"
    });

    return (
        <section style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#121212", color: "white" }}>
            
            <div style={{ backgroundColor: "#1a1a1a", padding: "40px", borderRadius: "20px", border: "1px solid #333" }}>
                
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "350px" }}>
                    <h2>Crea tu cuenta</h2>
                    
                    <label style={{ fontSize: "14px", marginBottom: "5px" }}>Nombre completo</label>
                    <input style={inputStyle} name='nombre' onChange={changeHandler} />

                    <label style={{ fontSize: "14px", marginBottom: "5px" }}>Email</label>
                    <input style={inputStyle} name='email' type="email" onChange={changeHandler} />

                    <label style={{ fontSize: "14px", marginBottom: "5px" }}>Contraseña</label>
                    <input style={inputStyle} name='password' type="password" onChange={changeHandler} />

                    <p style={{ fontSize: "14px", margin: "15px 0 10px 0" }}>Soy</p>

                    <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
                        
                        {/* TARJETA ARTISTA */}
                        <label style={cardStyle("artista")}>
                            <input 
                                type="radio" 
                                name="role" 
                                value="artista" 
                                onChange={changeHandler} 
                                style={{ display: "none" }}
                            />
                            <span style={{ fontWeight: "bold", display: "block" }}>Artista</span>
                            <h6 style={{ margin: 0, fontWeight: "normal", color: "#888" }}>Busco oportunidades</h6>
                        </label>

                        {/* TARJETA PRODUCTOR */}
                        <label style={cardStyle("productor")}>
                            <input 
                                type="radio" 
                                name="role" 
                                value="productor" 
                                onChange={changeHandler} 
                                style={{ display: "none" }} 
                            />
                            <span style={{ fontWeight: "bold", display: "block" }}>Productor</span>
                            <h6 style={{ margin: 0, fontWeight: "normal", color: "#888" }}>Publico castings</h6>
                        </label>
                    </div>

                    <button type="submit" style={btnStyle}>Crear cuenta</button>

                    <p style={{ display: "flex", justifyContent: "center", color: "#888", gap: "5px", fontSize: "14px", marginTop: "20px" }}>
                        ¿Ya tienes cuenta?
                        <Link to="/login" style={{ color: "#d4a373", textDecoration: "none", fontWeight: "bold" }}>Entra</Link>
                    </p>
                </form>
            </div>
            
        </section>
    );
}

const inputStyle = { marginBottom: "15px", padding: "10px", backgroundColor: "#000", border: "1px solid #333", color: "white", borderRadius: "5px" };
const btnStyle = { padding: "15px", cursor: "pointer", borderRadius: "8px", backgroundColor: "#d4a373", border: "none", fontWeight: "bold", marginTop: "10px" };

export default Register;