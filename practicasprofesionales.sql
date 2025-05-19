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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`IdAlumno`, `IdUsuario`, `Codigo`, `NombreCompleto`, `Carrera`, `Grado`, `Grupo`, `Turno`, `Domicilio`, `NumeroCasa`, `Colonia`, `CodigoPostal`, `Municipio`, `Estado`, `Telefono`, `TelefonoEmergencia`, `CorreoInstitucional`, `NSS`, `Edad`, `Nacionalidad`, `NombrePadre`, `TelefonoPadre`, `NombreMadre`, `TelefonoMadre`, `Movil`, `Calificacion`, `Ordinario`, `Revision`, `BarraStatus`, `IdEmpresa`) VALUES
(1, 11, '123456', 'Juan Pérez López', 'Ingeniería en Sistemas', '7', 'A', 'Matutino', 'Calle Falsa 123', '123', 'Centro', '12345', 'Ciudad Ejemplo', 'Estado Ejemplo', '5551234567', '5557654321', 'liz@alumnos.udg.mx', '98765432101', 22, 'Mexicana', 'Carlos Pérez', '5551122334', 'Laura López', '5552233445', '5553344556', 100, 1, 1, 3, NULL),
(3, 12, '1234567', 'Juan Pérez López', 'Ingeniería en Sistemas', '7', 'A', 'Matutino', 'Calle Falsa 123', '123', 'Centro', '12345', 'Ciudad Ejemplo', 'Estado Ejemplo', '5551234567', '5557654321', 'liza@alumnos.udg.mx', '98765532101', 22, 'Mexicana', 'Carlos Pérez', '5551122334', 'Laura López', '5552233445', '5553344556', 100, 1, 1, 13, 19),
(4, 12, '221821756', 'lizethcruz', 'TPSI', '8vo', 'A', 'Matutino', 'rio autlan', '1824', 'atlas', '44444', 'guadalajara', 'jalisco', '3318879514', '3318879512', 'liza@alumnos.udg.mx', '12345678988', 18, 'mexicana', 'mama', '3318879514', 'papa', '3318879514', '3318879514', 100, NULL, 1, 10, 19);

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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`IdEmpresa`, `IdUsuario`, `Nombre`, `RFC`, `Telefono`, `Correo`, `DomicilioFiscal`, `Descripcion`, `Logo`, `Actividades`, `Vacantes`, `Responsable`, `Cargo`, `Validada`, `PracticasExtraordinarias`) VALUES
(1, NULL, 'Tech Solutions S.A.', 'TSO123456XYZ', '3322456789', 'a', 'Av. Tecnológica', 'Empresa dedicada al desarrollo de software empresarial.', 'https://example.com/logo.png', 'Desarrollo de software, consultoría IT', 1, '', '', 1, NULL),
(2, 3, 'sdaf', 'ZYB150127NW3', '3318879514', 'e', 'arra', 'aasfaf', 'C:\\fakepath\\WhatsApp Image 2025-05-03 at 10.26.28 PM.jpeg', 'yes', 10, '', '', NULL, NULL),
(3, 4, 'Citlaly Lizeth Cruz Gomez', 'ZYB1501275W3', '3318879514', 'i', 'arra', 'sdadasd', 'C:\\fakepath\\WhatsApp Image 2025-05-03 at 8.32.10 PM (3).jpeg', 'yes', 8, '', '', NULL, NULL),
(4, 5, 'LizPro', 'JFSN621121GB1', '22222', '', 's', 'yessuperpro', 'C:\\fakepath\\orden-58984.jpg', 'ssss', 8, '', '', NULL, NULL),
(5, 14, 'Yes', 'ZYB1505275W6', '3318879514', '', 'arra', 'fasfasf', 'WhatsApp Image 2025-05-03 at 8.32.10 PM (3).jpeg', 'yes', 4, '', '', NULL, NULL),
(6, 15, 'Empresa X', 'XYB150127NW3', '331875145', '', 'arra', 'Esta es solo una empresa x ', '1508px-Escudo_UdeG.svg.png', 'Ser muy x', 10, '', '', NULL, NULL),
(7, 16, 'Empresa X', 'XYB150127NW8', '331875145', '', 'arra', 'Esta es solo una empresa x ', 'WhatsApp Image 2025-05-03 at 8.32.10 PM (3).jpeg', 'Ser muy x', 10, '', '', NULL, NULL),
(8, 17, 'Empresa X', 'vYB150127NW8', '331875145', '', 'arra', 'Esta es solo una empresa x ', NULL, 'Ser muy x', 10, '', '', NULL, NULL),
(9, 18, 'Empresa X', 'vtB150127NW8', '331875145', '', 'arra', 'Esta es solo una empresa x ', 'WhatsApp Image 2025-05-03 at 8.32.10 PM (3).jpeg', 'Ser muy x', 10, '', '', NULL, NULL),
(10, 21, 'empresa ', '3424325235', '232424', '', 'yes1', 'empresa y nada mas', NULL, 'ewtfnk', 10, '', '', NULL, NULL),
(12, 23, 'empresaaa', '344325235', '232424', '', 'yes1', 'empresa y nada mas', NULL, 'ewtfnk', 10, '', '', NULL, NULL),
(13, 24, 'empresaaaaaa', '3t4325235', '232424', '', 'yes1', 'empresa y nada mas', NULL, 'ewtfnk', 10, '', '', NULL, NULL),
(14, 25, 'empresaaaaaaa', '3t43a25235', '232424', '', 'yes1', 'empresa y nada mas', '1747082544608-1508px-Escudo_UdeG.svg.png', 'ewtfnk', 10, '', '', NULL, NULL),
(15, 26, 'empresaaaaaaa', '3t43a252a35', '232424', '', 'yes1', 'empresa y nada mas', '1747082684488-1508px-Escudo_UdeG.svg.png', 'ewtfnk', 10, '', '', NULL, NULL),
(16, 27, 'empresaaaaaaaa', '3t43aa252a35', '232424', '', 'yes1', 'empresa y nada mas', '1747083215991-1508px-Escudo_UdeG.svg.png', 'ewtfnk', 10, '', '', NULL, NULL),
(17, 28, 'Empresa', '1254124dsf', '333333', '', 'arra', 'empresa', '1747089290790-1508px-Escudo_UdeG.svg.png', 'asdda', 10, '', '', NULL, NULL),
(18, 29, 'EmpresaSupercool', 'ZYB150527XXX', '3318879514', '', 'Rio Autlan 1824, Atlas, 44870, Guadalajara, Jalisco', 'mucha empresa', '1747256465322-WhatsApp Image 2025-05-03 at 10.26.28 PM.jpeg', 'Hacer cosas cool', 10, '', '', NULL, NULL),
(19, 34, 'aaa', 'ZYB150xxxxxx', '3318879514', 'aaaa@aaaa', 'Rio Autlan 1841, Atlas, 44870, Guadalajara, Jalisco', 'aaa', '1747260421664-aaa', 'aaa', 3, '', '', 1, 0),
(20, 35, 'e', 'xxxxxxxx', '232424', 'citlaly@gmail', 'Rio Autlan 11213, ALTA12, 44870, Guadalajara, Jalisco', 'e\n\ne\ne\ne\n\nee\n', '1747260599248-undefined', 'yes', 5, '', '', 0, 0),
(21, 36, 'e', 'xxxx', '3318879514', '22@222222', 'w w, w, w, w, w', 'e\ne\n', '1747260670455-undefined', 'xxx', 12, '', '', 0, 0),
(22, 37, 'err', 'xxxasda', '3318879514', '12@12', 'Rio Autlan 1824, Atlas, w, Guadalajara, SADF', 'erer\n\n', '1747262655665-WhatsApp Image 2025-05-03 at 8.32.10 PM (3).jpeg', 'yes', 12, '', '', 0, 0),
(24, 39, 'Citlaly Lizeth Cruz Gomez', 'XXXXTR', '3318879514', 'citlaly@gmaile', '123 123, 31, 313, 31, 13', '123', '1747263992190-WhatsApp Image 2025-05-03 at 10.26.28 PM.jpeg', 'yes', 12, '', '', 0, 0);

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
-- Volcado de datos para la tabla `opinionempresa`
--

INSERT INTO `opinionempresa` (`IdOpinion`, `IdEmpresa`, `IdUsuario`, `NombreUsuario`, `Opinion`, `Calificacion`) VALUES
(1, 1, 12, '', 'Muy buena empresa, aprendí mucho.', 5),
(2, 2, 11, 'Carlos Gómez', 'Excelente atención al cliente y servicio rápido.', 5),
(3, 2, 11, 'Laura Martínez', 'Buena experiencia, pero puede mejorar la comunicación.', 4),
(4, 2, 11, 'Jorge Pérez', 'No recibí respuesta a mi consulta, mal servicio.', 2),
(5, 2, 11, 'Ana Torres', 'Muy profesionales, los recomiendo.', 5),
(6, 2, 11, 'Luis Ramírez', 'El proceso fue más lento de lo esperado.', 3),
(7, 2, 11, 'Daniela López', 'Atención personalizada y clara. Muy satisfecha.', 5),
(8, 2, 11, 'Marcos Díaz', 'Buen servicio pero precios algo elevados.', 4),
(9, 2, 11, 'Cecilia Herrera', 'No resolvieron mi problema. Mala experiencia.', 1),
(10, 2, 11, 'Ricardo Méndez', 'Todo fue según lo acordado. Excelente equipo.', 5),
(11, 2, 11, 'Patricia Salinas', 'Aceptable, pero deberían mejorar la puntualidad.', 3),
(12, 19, 12, '', 'hey', 4),
(13, 19, 12, '', 'a', 4);

-- --------------------------------------------------------

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
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IdUsuario`, `Correo`, `Contrasena`, `Nombre`, `Rol`) VALUES
(3, '22@2', '$2b$10$IKiv2B./r6Ea.kzPuHFhsuiy0T3Cogc2riFBCxloew8UhIS6F9fQq', 'sdaf', 'empresa'),
(4, '22@2222', '$2b$10$nbJ0pAKDcg6MEOiiANqDh.OnbBPFBB0F12CF4Ch5MGJ.lV1aEfDw.', 'Citlaly Lizeth Cruz Gomez', 'empresa'),
(5, 'citlaly.cruz2175@alumnos.udg.mx', '$2b$10$BEqtdTPFjP/h.voT0QbaHe2tXQvDDOR11mAjKrFy8FKlAXqH5wjCG', 'LizPro', 'empresa'),
(11, 'liz@alumnos.udg.mx', '$2b$10$zhGEh/0RFEEoVX3ee2MuK.d8R2T3Nc2QXuMD7zA3mEnflwzNdUy42', 'liz', 'alumno'),
(12, 'liza@alumnos.udg.mx', '$2b$10$ReZfWmdW3i2bDftVH8qeCen.QkdsaS/BzGkL8gnkiIyWxwtfwkhoC', 'lize', 'alumno'),
(14, '22@2256', '$2b$10$gYZrztHLAVtL.6zECHSiuuJekGX5i1bGtC0Gf70ZmvD2AGNMcDMpy', 'Yes', 'empresa'),
(15, 'empresax@gmail.com', '$2b$10$hYXuSTXxsaFPx0revD5rWOG/nEMu7wZemcZOCXujGq741jMQxCNDe', 'Empresa X', 'empresa'),
(16, 'empresaxxx@gmail.com', '$2b$10$XWM5xiB06Aa9ICcxq9g1IuU2sQP35xeKM9MP9ckUPBf1XgYjZYhUu', 'Empresa X', 'empresa'),
(17, 'empresaxxxxx@gmail.com', '$2b$10$8m874S9A0.QyQpldRVJ2AuWOSv4QZt1OqhE9/OiiLQM259zoVmtYe', 'Empresa X', 'empresa'),
(18, 'empresssaxxxxx@gmail.com', '$2b$10$JHeysuDAf9/zVOvWKfxXJ.ttuwp1vztUedVqXzOGAWgpr3yt3nnZC', 'Empresa X', 'empresa'),
(21, 'emres@gmail.com', '$2b$10$zt8JklTkFgWiHpbZvYWwAO19xkYYysjmMp1upGAPOLgo4VWhP0GzG', 'empresa ', 'empresa'),
(23, 'emresas@gmail.com', '$2b$10$1mWV7Th3/0EP.DQdaFuPxO0IJsJn/cm1cT2Fxnpo624am1AjuYX4.', 'empresaaa', 'empresa'),
(24, 'emresaaaas@gmail.com', '$2b$10$dGSBOybc.6LMppbcR6bi6utNzImrmZ1BBpyePjyzK7EJawMIC20Nm', 'empresaaaaaa', 'empresa'),
(25, 'emresaaaaas@gmail.com', '$2b$10$rdxh.BJoQRIQ50eRpTbQ3ed3ogETsQtNX1FTZTAXGhpZWLQaSAk/C', 'empresaaaaaaa', 'empresa'),
(26, 'emresaaaaaas@gmail.com', '$2b$10$Whvy9h/kM3zf6AdK2OO/1eAJQcMB7Ev3TiA8q53no/mXppdstF6w.', 'empresaaaaaaa', 'empresa'),
(27, 'emresaaaaasdaaaas@gmail.com', '$2b$10$lW5brPMgpQbJGcSQgc76megw9KCfub4f4.rL5P5C1Kce62965MpNC', 'empresaaaaaaaa', 'empresa'),
(28, 'empres@gma', '$2b$10$.MXzOpJgeKSy9jV2.Zfxw.aQLi3VCPqgjFGgFjF5mTgpJ6SXG9vHC', 'Empresa', 'empresa'),
(29, 'empresa@empresasupercool', '$2b$10$/Kz6qI/aPDuX6t4x9muw7.cOOii5TiZKcrOUOi1k4kcrfCsWoch5e', 'EmpresaSupercool', 'empresa'),
(34, 'aaaa@aaaa', '$2b$10$DlxmvxcqGfXCxsiw4Zh6tuW7.zm5TvP4zRNf5oNB9f689sBlf5.te', 'aaa', 'empresa'),
(35, 'citlaly@gmail', '$2b$10$l9BnlF70RYwQCB0kjwAYh.Lxp.XlJiJ01ZyI1d7BL7aMltDV/wkCa', 'e', 'empresa'),
(36, '22@222222', '$2b$10$7KpKkCQ7IHwuehYpq3Cz3.G5NTy1YToRgm5L1bvy5Rm2H1EVtbfNW', 'e', 'empresa'),
(37, '12@12', '$2b$10$bcnTiNrE7jUT0dyuZFN9TefPu.mT08lOt5iZOyVZGLJNheCqsGz9G', 'err', 'empresa'),
(39, 'citlaly@gmaile', '$2b$10$3tVP1zQ2kMglELDNBo4Jj.SAKtEFyFHCdjOJia8bCO8PC5mcgPQ1y', 'Citlaly Lizeth Cruz Gomez', 'empresa'),
(40, 'lizita@alumnos.udg.mx', '$2b$10$XGQPSRAof8tRCW8Tq0wYL.NNWOhHZoHwgu.wSHQ2DffGUjrH4i0g6', 'liz', 'alumno'),
(41, 'lizitaa@alumnos.udg.mx', '$2b$10$p.z.a9CKyEzRSBx8z4gEUOO3ZSJpj5oEP70LdMio.gXG7m.WI3JhW', 'liz', 'coordinador');

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
