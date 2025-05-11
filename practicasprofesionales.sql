-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 11-05-2025 a las 19:07:15
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `practicasprofesionales`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accesoporcalificacion`
--

DROP TABLE IF EXISTS `accesoporcalificacion`;
CREATE TABLE IF NOT EXISTS `accesoporcalificacion` (
  `IdRango` int NOT NULL AUTO_INCREMENT,
  `MaxCalificacion` int NOT NULL,
  `MinCalificacion` int NOT NULL,
  `FechaInicio` date DEFAULT NULL,
  `FechaFin` date DEFAULT NULL,
  PRIMARY KEY (`IdRango`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `accesoporcalificacion`
--

INSERT INTO `accesoporcalificacion` (`IdRango`, `MaxCalificacion`, `MinCalificacion`, `FechaInicio`, `FechaFin`) VALUES
(1, 100, 90, '2025-06-01', '2025-06-30'),
(2, 90, 80, '2025-07-01', '2025-07-31'),
(3, 80, 70, '2025-08-01', '2025-08-31'),
(4, 70, 50, '2025-09-01', '2025-09-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE IF NOT EXISTS `alumnos` (
  `IdAlumno` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int NOT NULL,
  `Codigo` varchar(50) NOT NULL,
  `NombreCompleto` varchar(255) NOT NULL,
  `Carrera` varchar(255) NOT NULL,
  `Grado` varchar(50) NOT NULL,
  `Grupo` varchar(50) NOT NULL,
  `Turno` enum('Matutino','Vespertino') NOT NULL,
  `Domicilio` varchar(255) NOT NULL,
  `NumeroCasa` varchar(10) NOT NULL,
  `Colonia` varchar(255) NOT NULL,
  `CodigoPostal` varchar(10) NOT NULL,
  `Municipio` varchar(255) NOT NULL,
  `Estado` varchar(255) NOT NULL,
  `Telefono` varchar(15) NOT NULL,
  `TelefonoEmergencia` varchar(15) NOT NULL,
  `CorreoInstitucional` varchar(255) NOT NULL,
  `NSS` varchar(20) NOT NULL,
  `Edad` int NOT NULL,
  `Nacionalidad` varchar(255) NOT NULL,
  `NombrePadre` varchar(255) NOT NULL,
  `TelefonoPadre` varchar(15) NOT NULL,
  `NombreMadre` varchar(255) NOT NULL,
  `TelefonoMadre` varchar(15) NOT NULL,
  `Movil` varchar(15) NOT NULL,
  `Calificacion` int DEFAULT NULL,
  `Ordinario` int DEFAULT NULL,
  `Revision` tinyint(1) DEFAULT '0',
  `BarraStatus` tinyint(1) DEFAULT '0',
  `IdEmpresa` int DEFAULT NULL,
  PRIMARY KEY (`IdAlumno`),
  UNIQUE KEY `NSS` (`NSS`),
  KEY `IdUsuario` (`IdUsuario`),
  KEY `IdEmpresa` (`IdEmpresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

DROP TABLE IF EXISTS `empresas`;
CREATE TABLE IF NOT EXISTS `empresas` (
  `IdEmpresa` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int DEFAULT NULL,
  `Nombre` varchar(255) NOT NULL,
  `RFC` varchar(13) NOT NULL,
  `Telefono` varchar(15) DEFAULT NULL,
  `Calle` varchar(100) DEFAULT NULL,
  `Colonia` varchar(100) DEFAULT NULL,
  `Numero` varchar(10) DEFAULT NULL,
  `Estado` varchar(50) DEFAULT NULL,
  `CodigoPostal` varchar(10) DEFAULT NULL,
  `Municipio` varchar(50) DEFAULT NULL,
  `Descripcion` text,
  `Logo` varchar(255) DEFAULT NULL,
  `Actividades` text,
  `Vacantes` int DEFAULT '0',
  `Validada` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`IdEmpresa`),
  UNIQUE KEY `RFC` (`RFC`),
  KEY `IdUsuario` (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`IdEmpresa`, `IdUsuario`, `Nombre`, `RFC`, `Telefono`, `Calle`, `Colonia`, `Numero`, `Estado`, `CodigoPostal`, `Municipio`, `Descripcion`, `Logo`, `Actividades`, `Vacantes`, `Validada`) VALUES
(1, NULL, 'Tech Solutions S.A.', 'TSO123456XYZ', '3322456789', 'Av. Tecnológica', 'Parques Industriales', '123', 'Jalisco', '45100', 'Zapopan', 'Empresa dedicada al desarrollo de software empresarial.', 'https://example.com/logo.png', 'Desarrollo de software, consultoría IT', 5, 1),
(2, 3, 'sdaf', 'ZYB150127NW3', '3318879514', 'arra', '2', '1841', '2', '44571', '2', 'aasfaf', 'C:\\fakepath\\WhatsApp Image 2025-05-03 at 10.26.28 PM.jpeg', 'yes', 12, NULL),
(3, 4, 'Citlaly Lizeth Cruz Gomez', 'ZYB1501275W3', '3318879514', 'arra', '2', '1841', '2', '44571', 'w', 'sdadasd', 'C:\\fakepath\\WhatsApp Image 2025-05-03 at 8.32.10 PM (3).jpeg', 'yes', 10, NULL),
(4, 5, 'LizPro', 'JFSN621121GB1', '22222', 's', 's', 's', '23', '44502', '3', 'yessuperpro', 'C:\\fakepath\\orden-58984.jpg', 'ssss', 10, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jefededepartamento`
--

DROP TABLE IF EXISTS `jefededepartamento`;
CREATE TABLE IF NOT EXISTS `jefededepartamento` (
  `IdJefeDepartamento` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int NOT NULL,
  `Carrera` varchar(255) NOT NULL,
  PRIMARY KEY (`IdJefeDepartamento`),
  KEY `IdUsuario` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opinionempresa`
--

DROP TABLE IF EXISTS `opinionempresa`;
CREATE TABLE IF NOT EXISTS `opinionempresa` (
  `IdOpinion` int NOT NULL AUTO_INCREMENT,
  `IdUsuario` int NOT NULL,
  `IdEmpresa` int NOT NULL,
  `Opinion` text,
  `Calificacion` tinyint NOT NULL,
  PRIMARY KEY (`IdOpinion`),
  KEY `IdUsuario` (`IdUsuario`),
  KEY `IdEmpresa` (`IdEmpresa`)
) ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `IdUsuario` int NOT NULL AUTO_INCREMENT,
  `Correo` varchar(255) NOT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Rol` enum('coordinador','alumno','empresa','jefe de departamento') NOT NULL,
  PRIMARY KEY (`IdUsuario`),
  UNIQUE KEY `Correo` (`Correo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IdUsuario`, `Correo`, `Contrasena`, `Nombre`, `Rol`) VALUES
(3, '22@2', '$2b$10$IKiv2B./r6Ea.kzPuHFhsuiy0T3Cogc2riFBCxloew8UhIS6F9fQq', 'sdaf', 'empresa'),
(4, '22@2222', '$2b$10$nbJ0pAKDcg6MEOiiANqDh.OnbBPFBB0F12CF4Ch5MGJ.lV1aEfDw.', 'Citlaly Lizeth Cruz Gomez', 'empresa'),
(5, 'citlaly.cruz2175@alumnos.udg.mx', '$2b$10$BEqtdTPFjP/h.voT0QbaHe2tXQvDDOR11mAjKrFy8FKlAXqH5wjCG', 'LizPro', 'empresa');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`) ON DELETE CASCADE,
  ADD CONSTRAINT `alumnos_ibfk_2` FOREIGN KEY (`IdEmpresa`) REFERENCES `empresas` (`IdEmpresa`) ON DELETE SET NULL;

--
-- Filtros para la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD CONSTRAINT `empresas_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `jefededepartamento`
--
ALTER TABLE `jefededepartamento`
  ADD CONSTRAINT `jefededepartamento_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `opinionempresa`
--
ALTER TABLE `opinionempresa`
  ADD CONSTRAINT `opinionempresa_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`) ON DELETE CASCADE,
  ADD CONSTRAINT `opinionempresa_ibfk_2` FOREIGN KEY (`IdEmpresa`) REFERENCES `empresas` (`IdEmpresa`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
