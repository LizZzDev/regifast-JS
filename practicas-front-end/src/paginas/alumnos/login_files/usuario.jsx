
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../componentes/header.jsx";
import { crearUsuario, validarToken } from "../../../api/usuarios/index.js";
import { generarToken } from "../../../api/usuarios/index.js";
import "./usuarios.css";

const RegistroUsuario = () => {
    // Estados para registro
     const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        password: "",
      });

    const [token, setToken] = useState("");
    const [tokenGenerado, setTokenGenerado] = useState(false);
    const [tokenValidado, setTokenValidado] = useState(false);
    const [correoValidado, setCorreoValidado] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    function capitalizarTexto(texto) {
    return texto
        .toLowerCase()
        .replace(/\b\w/g, (letra) => letra.toUpperCase());
    }

    const validarContrasena = (contrasena) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return regex.test(contrasena);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

          if (name === "correo" && value !== correoValidado) {
            setTokenValidado(false);
            setCorreoValidado(""); 
            setTokenGenerado(false); 
            setToken("");
        }

        setFormData((prevData) => ({
        ...prevData,
        [name]: name === "nombre" ? capitalizarTexto(value) : value,
        }));
    };

    const generarTokenConst = async () => {
        if (!formData.correo.endsWith("@alumnos.udg.mx")) {
            setMensaje("Solo se permiten correos @alumnos.udg.mx");
            return;
        }
        
        if (!validarContrasena(formData.password)) {
            setMensaje("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.");
            return;
        }


        if (formData.correo) {
            try {
                await generarToken(formData.correo);
                setMensaje("Token enviado al correo.");
                setTokenGenerado(true);
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
                    correo: formData.correo.trim().toLocaleLowerCase(),
                    contrasena: formData.password,
                    nombre: formData.nombre,
                    rol: 'alumno'
                  } );
            setMensaje('Registro exitoso. Redirigiendo...');
            setTimeout(() => navigate("/alumno_poli/"), 1500);
        } catch (error) {
            console.error('Error:', error);
            setMensaje(error.response?.data?.message || 'Error en el registro');
        }
    };
    return (
        <>
            <Header /> {/* Fuera del contenedor principal */}
            <div id="registro-usuario-div-container" className="usuario-container">

                <section id="registro-usuario-section-auth" className="auth-section">
                    <div id="registro-usuario-div-formulario" className="loginForm">
                        <h1 id="registro-usuario-h1-titulo">Crear Cuenta</h1>

                        <form id="registro-usuario-form" onSubmit={handleRegistro}>
                            <div id="registro-usuario-div-nombre" className="form-group">
                                <label id="registro-usuario-label-nombre" htmlFor="registro-usuario-input-nombre">
                                    Nombre Completo:
                                </label>
                                <input
                                    id="registro-usuario-input-nombre"
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Tu nombre completo"
                                    required
                                />
                            </div>

                            <div id="registro-usuario-div-correo" className="form-group">
                                <label id="registro-usuario-label-correo" htmlFor="registro-usuario-input-correo">
                                    Correo Electrónico:
                                </label>
                                <input
                                    id="registro-usuario-input-correo"
                                    type="email"
                                    name="correo"
                                    value={formData.correo}
                                    onChange={handleChange}
                                    placeholder="tu@correo.com"
                                    required
                                />
                                {correoValidado && formData.correo !== correoValidado && (
                                    <p
                                        id="registro-usuario-mensaje-correo-cambiado"
                                        className="mensaje advertencia"
                                    >
                                        Correo cambiado. Por favor, valida el token nuevamente.
                                    </p>
                                )}
                            </div>

                            <div id="registro-usuario-div-password" className="form-group">
                                <label id="registro-usuario-label-password" htmlFor="registro-usuario-input-password">
                                    Contraseña:
                                </label>
                                <input
                                    id="registro-usuario-input-password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Mínimo 6 caracteres"
                                    required
                                />
                            </div>

                            <div id="registro-usuario-div-token" className="form-group">
                                <label id="registro-usuario-label-token" htmlFor="registro-usuario-input-token">
                                    Token:
                                </label>
                                <div className="token-row">
                                    <input
                                        id="registro-usuario-input-token"
                                        type="text"
                                        name="token"
                                        value={token}
                                        onChange={(e) => setToken(e.target.value)}
                                        placeholder=""
                                        required
                                    />

                                    <button
                                        id="registro-usuario-btn-generar-token"
                                        className="tokenBoton"
                                        type="button"
                                        onClick={generarTokenConst}
                                        disabled={tokenGenerado}
                                    >
                                        Generar Token
                                    </button>

                                    <button
                                        id="registro-usuario-btn-validar-token"
                                        className="tokenBoton"
                                        type="button"
                                        onClick={validarTokenConst}
                                        disabled={!tokenGenerado || tokenValidado}
                                    >
                                        Validar Token
                                    </button>
                                </div>
                            </div>

                            {mensaje && (
                                <div
                                    id="registro-usuario-div-mensaje"
                                    className={`mensaje ${mensaje.includes('éxito') ? 'exito' : 'error'}`}
                                >
                                    {mensaje}
                                </div>
                            )}

                            <button 
                                id="registro-usuario-btn-submit"
                                type="submit"
                                disabled={!tokenValidado}
                            >
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
export default RegistroUsuario;