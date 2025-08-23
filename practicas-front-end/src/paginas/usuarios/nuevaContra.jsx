import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./nuevaContra.css";
import { obtenerSiHayToken, restablecerContrasena } from "../../api/usuarios";

const NuevaContrasena = () => {
  const { token } = useParams();
  const [nueva, setNueva] = useState("");
  const [tokenValido, setTokenValido] = useState(null);
  const [confirmar, setConfirmar] = useState("");
  const [mostrarNueva, setMostrarNueva] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  const [errores, setErrores] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  const validarToken = async () => {
    try {
      const respuesta = await obtenerSiHayToken(token);
      console.log (respuesta);
      setTokenValido(true);
    } catch (error) {
      setTokenValido(false);
      alert (error)
    }
  };

  validarToken();
}, [token]);

  if (tokenValido === null) {
    return <p style={{ textAlign: "center" }}>Verificando token...</p>;
  }

  if (!tokenValido) {
    return <p style={{ color: "red", textAlign: "center" }}>Token inválido o expirado.</p>;
  }

  const togglePassword = (tipo) => {
    if (tipo === "nueva") setMostrarNueva(!mostrarNueva);
    else setMostrarConfirmar(!mostrarConfirmar);
  };

  const validarContrasena = (contrasena) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(contrasena);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarContrasena(nueva)) {
      setErrores("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.");
      return;
    }
    if (nueva !== confirmar) {
      setErrores("Las contraseñas no coinciden.");
      return;
    }
    setErrores("");
    
      try {
          const restablecerContraseñaEndpoint = await restablecerContrasena (nueva, token);

          console.log(restablecerContraseñaEndpoint);
         if (restablecerContraseñaEndpoint?.rol === "alumno") {
            navigate("/alumno_poli/");
          } else if (restablecerContraseñaEndpoint?.rol === "empresa") {
            navigate("/empresa_poli/");
          } else if (restablecerContraseñaEndpoint?.rol === "coordinador") {
            navigate("/coordinador_poli/");
          } else if (restablecerContraseñaEndpoint?.rol === "jefeDepartamento") {
            navigate("/jefe_poli/");
          } else {
            navigate("/no-autorizado"); 
          }
          alert("Contraseña cambiada con éxito.");
      } catch (error) {
          alert(error);
      }
    };

  return (
      <div id="nueva-container">
      <form id="nueva-form" onSubmit={handleSubmit}>
        <h2 id="nueva-title">Crear Nueva Contraseña</h2>
        <p id="nueva-description">Introduce tu nueva contraseña y confírmala</p>

        <div id="nueva-group1" className="password-group">
      <input
        type={mostrarNueva ? "text" : "password"}
        id="nueva"
        placeholder="Nueva contraseña"
        value={nueva}
        onChange={(e) => setNueva(e.target.value)}
        required
      />
    </div>

    {/* Para el input "confirmar contraseña" */}
    <div id="nueva-group2" className="password-group">
      <input
        type={mostrarConfirmar ? "text" : "password"}
        id="confirmar"
        placeholder="Confirmar contraseña"
        value={confirmar}
        onChange={(e) => setConfirmar(e.target.value)}
        required
      />
      <span className="toggle-icon" onClick={() => togglePassword("confirmar")}>
      </span>
    </div>

            {errores && <p style={{ color: "red", textAlign: "center" }}>{errores}</p>}

            <button id="nueva-button" type="submit">Cambiar contraseña</button>
          </form>      
    </div>
   );
};

export default NuevaContrasena;