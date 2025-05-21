-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 19-05-2025 a las 05:51:07
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
(1, 100, 90, '2025-05-09', '2025-05-12'),
(2, 90, 80, '2025-05-18', '2025-05-19'),
(3, 80, 70, '2025-05-19', '2025-05-20'),
(4, 70, 50, '2025-05-21', '2025-05-22');

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
  UNIQUE KEY `Codigo` (`Codigo`),
  KEY `IdUsuario` (`IdUsuario`),
  KEY `IdEmpresa` (`IdEmpresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `Correo` varchar(255) NOT NULL,
  `DomicilioFiscal` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Descripcion` text,
  `Logo` varchar(255) DEFAULT NULL,
  `Actividades` text,
  `Vacantes` int DEFAULT '0',
  `Responsable` varchar(255) NOT NULL,
  `Cargo` varchar(255) NOT NULL,
  `Validada` tinyint(1) DEFAULT '0',
  `PracticasExtraordinarias` int DEFAULT NULL,
  PRIMARY KEY (`IdEmpresa`),
  UNIQUE KEY `RFC` (`RFC`),
  KEY `IdUsuario` (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `IdEmpresa` int NOT NULL,
  `IdUsuario` int NOT NULL,
  `NombreUsuario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Opinion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Calificacion` tinyint NOT NULL,
  PRIMARY KEY (`IdOpinion`),
  KEY `IdUsuario` (`IdUsuario`),
  KEY `IdEmpresa` (`IdEmpresa`)
) ;

--
-- Estructura de tabla para la tabla `token`
--

DROP TABLE IF EXISTS `token`;
CREATE TABLE IF NOT EXISTS `token` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Fecha_registro` datetime NOT NULL,
  `Fecha_vencimiento` datetime NOT NULL,
  `Correo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Intentos` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
