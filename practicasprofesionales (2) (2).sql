-- phpMyAdmin SQL Dump
-- Version 5.2.0
-- https://www.phpmyadmin.net/
-- Generado el: 10-02-2025 a las 04:51:09
-- Servidor: 127.0.0.1:3306
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Codificación
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Base de datos: `practicasprofesionales`
-- --------------------------------------------------------

-- Tabla: `alumnos`
DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE `alumnos` (
  `IdAlumnos` INT NOT NULL AUTO_INCREMENT,
  `Codigo` INT DEFAULT NULL,
  `NombreCompleto` VARCHAR(255) DEFAULT NULL,
  `Carrera` VARCHAR(255) DEFAULT NULL,
  `Grado` VARCHAR(255) DEFAULT NULL,
  `Grupo` VARCHAR(255) DEFAULT NULL,
  `Turno` VARCHAR(255) DEFAULT NULL,
  `Domicilio` VARCHAR(255) DEFAULT NULL,
  `NumeroCasa` INT DEFAULT NULL,
  `Colonia` VARCHAR(255) DEFAULT NULL,
  `CodigoPostal` INT DEFAULT NULL,
  `Municipio` VARCHAR(255) DEFAULT NULL,
  `Estado` VARCHAR(255) DEFAULT NULL,
  `Telefono` VARCHAR(15) DEFAULT NULL,
  `TelefonoEmergencia` VARCHAR(15) DEFAULT NULL,
  `CorreoInstitucional` VARCHAR(255) DEFAULT NULL,
  `NSS` VARCHAR(20) DEFAULT NULL,
  `Edad` INT DEFAULT NULL,
  `Nacionalidad` VARCHAR(255) DEFAULT NULL,
  `NombrePadre` VARCHAR(255) DEFAULT NULL,
  `TelefonoPadre` VARCHAR(15) DEFAULT NULL,
  `NombreMadre` VARCHAR(255) DEFAULT NULL,
  `TelefonoMadre` VARCHAR(15) DEFAULT NULL,
  `Movil` VARCHAR(15) DEFAULT NULL,
  `Revisado` INT DEFAULT NULL,
  PRIMARY KEY (`IdAlumnos`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3;

-- Tabla: `empresasnoverificadas`
DROP TABLE IF EXISTS `empresasnoverificadas`;
CREATE TABLE `empresasnoverificadas` (
  `id_empresa` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `rfc` VARCHAR(13) NOT NULL,
  `telefono` VARCHAR(15) NOT NULL,
  `calle` VARCHAR(100) NOT NULL,
  `colonia` VARCHAR(100) NOT NULL,
  `numero` INT NOT NULL,
  `estado` VARCHAR(50) NOT NULL,
  `codigo_postal` VARCHAR(10) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `municipio` VARCHAR(50) NOT NULL,
  `logo` VARCHAR(255) NOT NULL,
  `actividades` TEXT NOT NULL,
  `vacantes` INT NOT NULL,
  PRIMARY KEY (`id_empresa`),
  UNIQUE KEY `rfc` (`rfc`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla: `empresass`
DROP TABLE IF EXISTS `empresass`;
CREATE TABLE `empresass` (
  `IdEmpresa` INT NOT NULL AUTO_INCREMENT,
  `NombreEmpresa` VARCHAR(255) DEFAULT NULL,
  `DomicilioFiscal` VARCHAR(255) DEFAULT NULL,
  `Telefono` VARCHAR(255) DEFAULT NULL,
  `CorreoElectronico` VARCHAR(255) DEFAULT NULL,
  `RFC` VARCHAR(255) DEFAULT NULL,
  `DescripcionEmpresa` TEXT,
  `TareasRealizar` TEXT,
  `LogoEmpresa` VARCHAR(255) DEFAULT NULL,
  `Vacantes` INT DEFAULT NULL,
  PRIMARY KEY (`IdEmpresa`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3;

-- Tabla: `opiniones`
DROP TABLE IF EXISTS `opiniones`;
CREATE TABLE `opiniones` (
  `IdOpinion` INT NOT NULL AUTO_INCREMENT,
  `Usuario` VARCHAR(255) DEFAULT NULL,
  `Opinion` TEXT,
  `Calificacion` INT DEFAULT NULL,
  `Empresa` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`IdOpinion`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3;

-- Tabla: `usuarios`
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `IdUsuario` INT NOT NULL AUTO_INCREMENT,
  `Correo` VARCHAR(255) DEFAULT NULL,
  `Contrasena` VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `Nombre` VARCHAR(255) DEFAULT NULL,
  `Rol` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`IdUsuario`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3;

-- Restaurar codificaciones
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;