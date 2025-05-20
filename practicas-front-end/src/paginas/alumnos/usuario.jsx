
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componentes/header.jsx";
import { crearUsuario, validarToken } from "../../api/usuarios/index.js";
import { generarToken } from "../../api/usuarios/index.js";
import "./usuarios.css";

const RegistroUsuario = () => {
    // Estados para registro
     const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        password: "",
      });

    const [token, setToken] = useState("");
    const [tokenValidado, setTokenValidado] = useState(false);
    const [correoValidado, setCorreoValidado] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

          if (name === "correo" && value !== correoValidado) {
            setTokenValidado(false);
            setCorreoValidado(""); // resetear
        }

        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const generarTokenConst = async () => {
        if (!formData.correo.endsWith("@alumnos.udg.mx")) {
            setMensaje("Solo se permiten correos @alumnos.udg.mx");
            return;
        }

        if (formData.correo) {
            try {
                await generarToken(formData.correo);
                setMensaje("Token enviado al correo.");
            } catch (error) {
                setMensaje(error.response?.data?.message || "error al generar el token.");
                console.error("Error al generar token:", error);
            }
        } else {
            setMensaje("Ingresa tu correo para generar el token.");
            }
    };

    
    const validarTokenConst = async () => {
        if (formData.correo && token) {
            try {
                await validarToken(formData.correo, token);
                setMensaje("Token validado.");
                setCorreoValidado(formData.correo);
                setTokenValidado(true);
            } catch (error) {
                setMensaje(error.response?.data?.message || "error al validar el token.");
                console.error("Error al validar token:", error);
            }
        } else {
            setMensaje("Ingresa un token primero.");
            }
    };

    const handleRegistro = async (e) => {
        e.preventDefault();
        
        // Validaciones
        if (!formData.correo.endsWith("@alumnos.udg.mx")) {
            setMensaje("Solo se permiten correos @alumnos.udg.mx");
            return;
        }

        if (!formData.nombre || !formData.correo || !formData.password) {
            setMensaje("Todos los campos son obligatorios");
            return;
        }

        if (!tokenValidado) {
            setMensaje("Primero debes validar tu token.");
            return;
        }

        try {
              await crearUsuario ( {
                    correo: formData.correo,
                    contrasena: formData.password,
                    nombre: formData.nombre,
                    rol: 'alumno'
                  } );
            setMensaje('Registro exitoso. Redirigiendo...');
            setTimeout(() => navigate("/alumnos/principal"), 1500);
        } catch (error) {
            console.error('Error:', error);
            setMensaje(error.response?.data?.message || 'Error en el registro');
        }
    };

    return (
        <div className="usuario-container">
            <Header />
            
            <section className="auth-section">
                <div className="loginForm">
                    <h1>Crear Cuenta</h1>
                    <form onSubmit={handleRegistro}>
                        <div className="form-group">
                            <label>Nombre Completo:</label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Tu nombre completo"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Correo Electrónico:</label>
                            <input
                                type="email"
                                name="correo"
                                value={formData.correo}
                                onChange={handleChange}
                                placeholder="tu@correo.com"
                                required
                            />
                             {correoValidado && formData.correo !== correoValidado && (
                                <p className="mensaje advertencia">
                                Correo cambiado. Por favor, valida el token nuevamente.
                                </p>
                            )}
                        </div>
                        
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Mínimo 6 caracteres"
                                required
                            />
                        </div>

                        <div id="token">
                            <label>Token:</label>
                            <input
                                type="text"
                                name="token"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                placeholder=""
                                required
                            />

                            <button
                                className="tokenBoton"
                                type="button"
                                onClick={generarTokenConst}
                            >
                                Generar Token
                            </button>

                            <button
                                className="tokenBoton"
                                type="button"
                                onClick={validarTokenConst}
                            >
                                Validar Token
                            </button>
                        </div>
                        
                        {mensaje && <div className={`mensaje ${mensaje.includes('éxito') ? 'exito' : 'error'}`}>
                            {mensaje}
                        </div>}
                        

                     <button
                        type="submit"
                         disabled={!tokenValidado}
                     >
                        Registrarse
                     </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default RegistroUsuario;