import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./headerContra.css";

const HeaderContra = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    const tipo = localStorage.getItem("tipoUsuario");
    switch (tipo) {
      case "alumno":
        navigate("/alumno_poli");
        break;
      case "empresa":
        navigate("/empresa_poli");
        break;
      case "coordinador":
        navigate("/coordinador_poli");
        break;
      case "jefe":
        navigate("/jefe_poli");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="header-container">
      <div className="logo-container" onClick={handleLogoClick}>
        <img src="/img/udg_white.png" alt="UDG" />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/principal">INICIO</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderContra;