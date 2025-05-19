
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componentes/header.jsx";
import { crearUsuario } from "../../api/usuarios/index.js";
import { generarToken } from "../../api/usuarios/index.js";
import "./usuarios.css";

const RegistroUsuario = () => {
    // Estados para registro
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    // Manejar registro
    const handleRegistro = async (e) => {
        e.preventDefault();
        
        // Validaciones
        if (!nombre || !correo || !password || !confirmPassword) {
            setMensaje("Todos los campos son obligatorios");
            return;
        }

        if (password !== confirmPassword) {
            setMensaje("Las contraseñas no coinciden");
            return;
        }

        if (password.length < 6) {
            setMensaje("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        const form = new FormData();
        form.append('correo', correo);
        form.append('contrasena', password);
        form.append('nombre', nombre);
        form.append('rol', 'alumno');

        const datosUsuario = {
            correo: correo,
            Contrasena: password,
            nombre: nombre,
        };

        form.append('datosUsuario', JSON.stringify(datosUsuario));

        try {
            await crearUsuario(form);
            setMensaje('Registro exitoso. Redirigiendo...');
            setTimeout(() => navigate("/principalAlumno"), 1500);
        } catch (error) {
            console.error('Error:', error);
            setMensaje(error.response?.data?.message || 'Error en el registro');
        }
    };

    return (
        <div className="usuario-container">
            <Header />
            
            <section className="auth-section">
                <div className="register-form">
                    <h1>Crear Cuenta</h1>
                    <form onSubmit={handleRegistro}>
                        <div className="form-group">
                            <label>Nombre Completo:</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="Tu nombre completo"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Correo Electrónico:</label>
                            <input
                                type="email"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                placeholder="tu@correo.com"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Mínimo 6 caracteres"
                                required
                            />
                        </div>
                        
                        {mensaje && <div className={`mensaje ${mensaje.includes('éxito') ? 'exito' : 'error'}`}>
                            {mensaje}
                        </div>}
                        
                         <button
                         type="button"
                         onClick={async () => {
                             if (correo) {
                                 try {
                                     await generarToken({ correo });
                                     setMensaje("Token enviado al correo.");
                                 } catch (error) {
                                      setMensaje("error al generar el token.");
                                     console.error("Error al generar token:", error);
                                 }
                            } else {
                                setMensaje("Ingresa tu correo para generar el token.");
                            }
                         }}
                     >
                         Generar Token
                     </button>

                     <button
                        type="submit"
                        // disabled={!token}
                     >
                        Iniciar Sesión
                     </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default RegistroUsuario;