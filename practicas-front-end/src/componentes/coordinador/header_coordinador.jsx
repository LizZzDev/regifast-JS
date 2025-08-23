import React from "react";
import "./header_coordinador.css";
import { useNavigate } from 'react-router-dom';
import { cerrarSesion } from '../../api/usuarios';

const HeaderCoordinador = () => {
    const navigate = useNavigate();
    
    const manejarCerrarSesion = async (e) => {
        e.preventDefault(); 
        try {
            await cerrarSesion(); 
            navigate('/coordinador_poli/'); 
        } catch (error) {
            console.error("Error al cerrar sesión", error);
        }
    };

    return (
        <header id="header-coordinador-principal"> {/* ID único añadido aquí */}
            <section id="header-coordinador-nomUDG">
                 <a href="https://www.udg.mx/es">
                    <img src="/img/udg_white.png" alt="Descripción" />
                </a>
            </section>
            <nav className="menu-coordinador">
                <ul>
                    <li><a href="/coordinador_poli/principal">INICIO</a></li> 
                    <li><a href="/coordinador_poli/alumnos">ALUMNOS</a></li>

                    <li className="dropdown-coordinador">
                        <a href="#">EMPRESAS</a>
                        <div className="submenu-coordinador">
                            <a href="/coordinador_poli/empresas" className="opcion-submenu">Empresas</a>
                            <a href="agregar-empresa" className="opcion-submenu">Añadir empresa</a>
                        </div>
                    </li>

                    <li><a href="/coordinador_poli/fechas">FECHAS</a></li>

                    <li className="dropdown-coordinador">
                        <a href="#">OPCIONES</a>
                        <div className="submenu-coordinador">
                            <a href="/coordinador_poli/crear-coordinador" className="opcion-submenu">Crear nuevo coordinador</a>
                            <a href="/coordinador_poli/crear-jefe" className="opcion-submenu">Crear jefe de departamento</a>
                            <a href="#" onClick={manejarCerrarSesion}>Cerrar sesión</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderCoordinador;