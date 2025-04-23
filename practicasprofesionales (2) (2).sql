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
  `IdAlumno` INT NOT NULL AUTO_INCREMENT,
  `IdUsuario` INT NOT NULL,
  `Codigo` VARCHAR(50) NOT NULL,
  `NombreCompleto` VARCHAR(255) NOT NULL,
  `Carrera` VARCHAR(255) NOT NULL,
  `Grado` VARCHAR(50) NOT NULL,
  `Grupo` VARCHAR(50) NOT NULL,
  `Turno` ENUM('Matutino', 'Vespertino') NOT NULL,
  `Domicilio` VARCHAR(255) NOT NULL,
  `NumeroCasa` VARCHAR(10) NOT NULL,
  `Colonia` VARCHAR(255) NOT NULL,
  `CodigoPostal` VARCHAR(10) NOT NULL,
  `Municipio` VARCHAR(255) NOT NULL,
  `Estado` VARCHAR(255) NOT NULL,
  `Telefono` VARCHAR(15) NOT NULL,
  `TelefonoEmergencia` VARCHAR(15) NOT NULL,
  `CorreoInstitucional` VARCHAR(255) NOT NULL,
  `NSS` VARCHAR(20) NOT NULL UNIQUE,
  `Edad` INT NOT NULL,
  `Nacionalidad` VARCHAR(255) NOT NULL,
  `NombrePadre` VARCHAR(255) NOT NULL,
  `TelefonoPadre` VARCHAR(15) NOT NULL,
  `NombreMadre` VARCHAR(255) NOT NULL,
  `TelefonoMadre` VARCHAR(15) NOT NULL,
  `Movil` VARCHAR(15) NOT NULL,
  `Revision` TINYINT(1) DEFAULT 0,
  `BarraStatus` TINYINT(1) DEFAULT 0,
  `IdEmpresa` INT NULL,
  PRIMARY KEY (`IdAlumno`),
  FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios`(`IdUsuario`) ON DELETE CASCADE,
  FOREIGN KEY (`IdEmpresa`) REFERENCES `empresas`(`IdEmpresa`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: `empresas`
DROP TABLE IF EXISTS `empresas`;
CREATE TABLE `empresas` (
  `IdEmpresa` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(255) NOT NULL,
  `RFC` VARCHAR(13) NOT NULL UNIQUE,
  `Telefono` VARCHAR(15),
  `Calle` VARCHAR(100),
  `Colonia` VARCHAR(100),
  `Numero` VARCHAR(10),
  `Estado` VARCHAR(50),
  `CodigoPostal` VARCHAR(10),
  `Municipio` VARCHAR(50),
  `Descripcion` TEXT,
  `Logo` VARCHAR(255),
  `Actividades` TEXT,
  `Vacantes` INT DEFAULT 0,
  `Validada` TINYINT(1) DEFAULT 0,
  PRIMARY KEY (`IdEmpresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: `opinionEmpresa`
DROP TABLE IF EXISTS `opinionEmpresa`;
CREATE TABLE `opinionEmpresa` (
  `IdOpinion` INT NOT NULL AUTO_INCREMENT,
  `IdUsuario` INT NOT NULL,
  `IdEmpresa` INT NOT NULL,
  `Opinion` TEXT,
  `Calificacion` TINYINT NOT NULL CHECK (`Calificacion` BETWEEN 1 AND 5),
  PRIMARY KEY (`IdOpinion`),
  FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios`(`IdUsuario`) ON DELETE CASCADE,
  FOREIGN KEY (`IdEmpresa`) REFERENCES `empresas`(`IdEmpresa`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla: `usuarios`
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `IdUsuario` INT NOT NULL AUTO_INCREMENT,
  `Correo` VARCHAR(255) NOT NULL UNIQUE,
  `Contrasena` VARCHAR(255) NOT NULL,
  `Nombre` VARCHAR(255) NOT NULL,
  `Rol` ENUM('coordinador', 'alumno', 'empresa', "jefe de departamento") NOT NULL,
  PRIMARY KEY (`IdUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Restaurar codificaciones
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;