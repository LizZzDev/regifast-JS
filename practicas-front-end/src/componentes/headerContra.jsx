import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./headerContra.css";

const HeaderContra = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    const tipo = localStorage.getItem("tipoUsuario");
    switch (tipo) {
      case "alumno":
        navigate("/alumno");
        break;
      case "empresa":
        navigate("/empresa");
        break;
      case "coordinador":
        navigate("/coordinador");
        break;
      case "jefe":
        navigate("/jefe");
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