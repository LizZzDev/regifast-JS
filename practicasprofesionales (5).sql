-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-06-2025 a las 20:08:59
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
(1, 100, 90, '2025-06-02', '2025-06-05'),
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
  `Codigo` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NombreCompleto` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Carrera` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Grado` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Grupo` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Turno` enum('Matutino','Vespertino') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Domicilio` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NumeroCasa` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Colonia` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `CodigoPostal` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Municipio` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Estado` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Telefono` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `TelefonoEmergencia` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `CorreoInstitucional` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NSS` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Edad` int DEFAULT NULL,
  `Nacionalidad` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NombrePadre` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `TelefonoPadre` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NombreMadre` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `TelefonoMadre` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Movil` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`IdAlumno`, `IdUsuario`, `Codigo`, `NombreCompleto`, `Carrera`, `Grado`, `Grupo`, `Turno`, `Domicilio`, `NumeroCasa`, `Colonia`, `CodigoPostal`, `Municipio`, `Estado`, `Telefono`, `TelefonoEmergencia`, `CorreoInstitucional`, `NSS`, `Edad`, `Nacionalidad`, `NombrePadre`, `TelefonoPadre`, `NombreMadre`, `TelefonoMadre`, `Movil`, `Calificacion`, `Ordinario`, `Revision`, `BarraStatus`, `IdEmpresa`) VALUES
(1, 1, '2222', 'Juan García', 'TPSI', '3', 'B', 'Matutino', 'Av. Central', '123', 'Centro', '44100', 'Guadalajara', 'Jalisco', '3312345678', '3312340000', 'juan.garcia@alumnos.udg.mx', '12345678901', 20, 'Mexicana', 'Carlos García', '3311111111', 'Ana López', '3312222222', '3313333333', NULL, NULL, 0, 4, 2),
(2, 2, '1111', 'María López', 'TPPQ', '2', 'A', 'Vespertino', 'Calle 5', '45', 'Zapopan', '45200', 'Zapopan', 'Jalisco', '3323456789', '3323450000', 'maria.lopez@alumnos.udg.mx', '23456789012', 19, 'Mexicana', 'José López', '3321111111', 'Marta Ruiz', '3322222222', '3323333333', NULL, NULL, 0, 2, 2),
(3, 3, '123', 'Carlos Ramírez', 'TPSI', '4', 'C', 'Matutino', 'Calle 10', '78', 'Tlaquepaque', '45500', 'Tlaquepaque', 'Jalisco', '3334567890', '3334500000', 'carlos.ramirez@alumnos.udg.mx', '34567890123', 21, 'Mexicana', 'Pedro Ramírez', '3331111111', 'Laura Sánchez', '3332222222', '3333333333', 20, NULL, 0, 3, 2),
(4, 4, '12345', 'Ana Torres', 'TPPL', '1', 'D', 'Matutino', 'Av. Lázaro', '56', 'Zapopan', '45210', 'Zapopan', 'Jalisco', '3345678901', '3345600000', 'ana.torres@alumnos.udg.mx', '45678901234', 18, 'Mexicana', 'Luis Torres', '3341111111', 'Sofía Torres', '3342222222', '3343333333', NULL, NULL, 0, 2, 2),
(5, 5, '513423', 'José Martínez', 'TPAL', '3', 'B', 'Vespertino', 'Calle 20', '90', 'Guadalajara', '44120', 'Guadalajara', 'Jalisco', '3356789012', '3356700000', 'jose.martinez@alumnos.udg.mx', '56789012345', 20, 'Mexicana', 'Mario Martínez', '3351111111', 'Patricia Díaz', '3352222222', '3353333333', NULL, NULL, 0, 2, 2),
(6, 6, '15355', 'Laura Morales', 'TPAL', '2', 'A', 'Matutino', 'Av. Niños Héroes', '123', 'Tonalá', '45400', 'Tonalá', 'Jalisco', '3367890123', '3367800000', 'laura.morales@alumnos.udg.mx', '67890123456', 19, 'Mexicana', 'Ramón Morales', '3361111111', 'Claudia Morales', '3362222222', '3363333333', NULL, NULL, 0, 5, 2),
(7, 7, '1533515', 'David Fernández', 'TTPQ', '4', 'C', 'Matutino', 'Calle 25', '77', 'Guadalajara', '44130', 'Guadalajara', 'Jalisco', '3378901234', '3378900000', 'david.fernandez@alumnos.udg.mx', '78901234567', 21, 'Mexicana', 'Manuel Fernández', '3371111111', 'Gloria Fernández', '3372222222', '3373333333', NULL, NULL, 0, 2, 2),
(8, 8, '46363536', 'Luis Navarro', 'BTQM', '1', 'D', 'Matutino', 'Calle 30', '89', 'Tlaquepaque', '45510', 'Tlaquepaque', 'Jalisco', '3390123456', '3390100000', 'luis.navarro@alumnos.udg.mx', '90123456789', 18, 'Mexicana', 'Alberto Navarro', '3391111111', 'Verónica Navarro', '3392222222', '3393333333', NULL, NULL, 0, 3, 2),
(9, 9, '2451512', 'Alejandra Ríos', 'TPEI', '2', 'A', 'Vespertino', 'Av. Revolución', '12', 'Guadalajara', '44140', 'Guadalajara', 'Jalisco', '3301234567', '3301200000', 'alejandra.rios@alumnos.udg.mx', '01234567890', 19, 'Mexicana', 'Rafael Ríos', '3301111111', 'Gabriela Ríos', '3302222222', '3303333333', NULL, NULL, 0, 5, 2),
(10, 10, '513534543535', 'Roberto Soto', 'BTQM', '3', 'B', 'Matutino', 'Calle 35', '101', 'Zapopan', '45230', 'Zapopan', 'Jalisco', '3312340000', '3312341000', 'roberto.soto@alumnos.udg.mx', '11234567890', 20, 'Mexicana', 'Carlos Soto', '3311110000', 'Ana Soto', '3312220000', '3313330000', NULL, NULL, 0, 4, 2),
(11, 11, '643643643', 'Daniela Vargas', 'TPSI', '4', 'C', 'Matutino', 'Av. Universidad', '55', 'Tlaquepaque', '45520', 'Tlaquepaque', 'oaxaca', '3323450000', '3323451000', 'daniela.vargas@alumnos.udg.mx', '21234567890', 21, 'Mexicana', 'Pedro Vargas', '3321110000', 'Laura Vargas', '3322220000', '3323330000', 100, 1, 0, 2, 2),
(13, 13, '346436', 'Fernanda Hernández', 'BTQM', '2', 'A', 'Matutino', 'Av. Chapultepec', '22', 'Zapopan', '45240', 'Zapopan', 'Jalisco', '3345670000', '3345671000', 'fernanda.hernandez@alumnos.udg.mx', '41234567890', 19, 'Mexicana', 'Ramón Hernández', '3341110000', 'Claudia Hernández', '3342220000', '3343330000', NULL, NULL, 0, 5, 2),
(14, 14, '346346346', 'Ricardo Reyes', 'TPEI', '3', 'B', 'Vespertino', 'Calle 45', '37', 'Guadalajara', '44160', 'Guadalajara', 'Jalisco', '3356780000', '3356781000', 'ricardo.reyes@alumnos.udg.mx', '51234567890', 20, 'Mexicana', 'Mario Reyes', '3351110000', 'Patricia Reyes', '3352220000', '3353330000', NULL, NULL, 0, 2, 2),
(16, 16, '34636636', 'Eduardo Mendoza', 'BTDC', '1', 'D', 'Vespertino', 'Calle 50', '81', 'Tlaquepaque', '45530', 'Tlaquepaque', 'Jalisco', '3378900000', '3378901000', 'eduardo.mendoza@alumnos.udg.mx', '71234567890', 18, 'Mexicana', 'Alberto Mendoza', '3371110000', 'Verónica Mendoza', '3372220000', '3373330000', NULL, NULL, 0, 3, 2),
(17, 17, '36463634', 'Valeria Carrillo', 'TPEI', '2', 'A', 'Matutino', 'Av. 16 de Septiembre', '18', 'Guadalajara', '44170', 'Guadalajara', 'Jalisco', '3389010000', '3389011000', 'valeria.carrillo@alumnos.udg.mx', '81234567890', 19, 'Mexicana', 'Pedro Carrillo', '3381110000', 'Laura Carrillo', '3382220000', '3383330000', NULL, NULL, 0, 5, 2),
(19, 19, '346366343', 'Mónica Luna', 'TPMF', '4', 'C', 'Vespertino', 'Av. Hidalgo', '29', 'Tlaquepaque', '45540', 'Tlaquepaque', 'Jalisco', '3301230000', '3301231000', 'monica.luna@alumnos.udg.mx', '01234567891', 21, 'Mexicana', 'Eduardo Luna', '3301110000', 'Mariana Luna', '3302220000', '3303330000', NULL, NULL, 0, 5, 2),
(21, 21, '123242244', 'Paola Gómez', 'TPSI', '3', 'B', 'Vespertino', 'Av. Patria', '65', 'Zapopan', '45220', 'Zapopan', 'Jalisco', '3389012345', '3389000000', 'paola.gomez@alumnos.udg.mx', '89012345678', 20, 'Mexicana', 'Eduardo Gómez', '3381111111', 'Mariana Gómez', '3382222222', '3383333333', NULL, NULL, 0, 2, 2),
(24, 58, '221822051', 'Angel Gabriel Cocina Valenzuela', 'TPSI', '8vo', 'A', 'Matutino', 'Av. Revolución', '1500', 'Olimpica', '44430', 'Guadalajara', 'Jalisco', '3313519649', '3313519647', 'angel.cocina2205@alumnos.udg.mx', '01234567899', 19, 'Mexicana', 'Ricardo Rodriguez', '3313519649', 'Ricarda Rodriguez', '3313519648', '3313519649', 100, NULL, 0, 4, 2),
(25, 62, '222208438', 'Nicole Salcedo Torres', 'TPSI', '8vo', 'B', 'Vespertino', 'rio rhin', '1372', 'quinta verlarde', '44430', 'guadalajara', 'jalisco', '3321633484', '3335194045', 'nicole.salcedo0843@alumnos.udg.mx', '22554668833', 18, 'mexicana', 'luis felipe salcedo torres', '3365698535', 'Sabrins torres almaraz', '3652651135', '3321633484', NULL, NULL, 0, 4, 2),
(26, 70, '222208217', 'Magallanes Zarzamora Yaser', 'TPSI', '8vo', 'B', 'Vespertino', 'Rio lagos 2271', '2268', 'Atlas', '44430', 'Guadalajara', 'Jalisco', '3311986054', '3322451978', 'rodrigo.magallanes0821@alumnos.udg.mx', '10440182347', 18, 'Mexicana', 'Luis Febrero', '3311945055', 'Alondra Aldama', '3321451678', '3343203295', NULL, NULL, 0, 4, 2),
(27, 59, '221233137', 'Ismael Trejo Rivas', 'TPSI', '8vo', 'B', 'Vespertino', 'Calle C numero 16', '13', 'Unidad Modelo', '44420', 'Guadalajara', 'Jalisco', '3324969191', '3311273287', 'ismael.trejo3313@alumnos.udg.mx', '73814960580', 18, 'Mexicana', 'Miguel Angel Trejo Rivas', '3316972164', 'Carmen Aide Rivas Cedeño', '3311273287', '3324969191', NULL, NULL, 0, 4, 2),
(28, 74, '222207679', 'yerik haziel gutierrez gonzalez', 'TPSI', '8vo', 'B', 'Vespertino', 'artes #1568', '1568', 'la loma', '44410', 'guadalajra', 'jalisco', '3336170148', '3328334635', 'yerik.gutierrez0767@alumnos.udg.mx', '15679845798', 19, 'mexicana', 'roberto', '3328334635', 'cecilia', '1459456321', '3332197066', NULL, NULL, 0, 4, 2),
(29, 73, '222207911', 'miguel alexis sanchez carranza', 'TPSI', '8vo', 'B', 'Vespertino', 'minatitlan', '140', 'san pedrito', '45624', 'san pedrito', 'jalisco', '3314088535', '3339556799', 'miguel.sanchez0791@alumnos.udg.mx', '10210611629', 19, 'mexicano', 'miguel angel sanchez gonzalez', '3311477215', 'maria patricia carranza marquez', '3339556799', '3319440824', 100, 1, 0, 4, 2),
(30, 63, '222208799', 'Jennifer Daniela Perez Vargas', 'TPSI', '8vo', 'B', 'Vespertino', 'Privada colonos #11', '11', 'Lomas del Tapatio', '45628', 'Tlaquepaque', 'Jalisco', '3326986277', '3314214795', 'jennifer.perez0879@alumnos.udg.mx', '57200678878', 18, 'Mexicana', 'Edith Janett Vargas Mariscal', '3314214795', 'Edith Janett Vargas Mariscal', '3314214795', '3326986277', NULL, NULL, 0, 4, 2),
(31, 61, '222208063', 'erick hernandez silva', 'TPSI', '8vo', 'B', 'Vespertino', 'roble', '19', 'zalate', '45694', 'guadalajara', 'jalisco', '3323829584', '3313881799', 'erick.hernandez0806@alumnos.udg.mx', '03210687483', 18, 'mexicano', 'Octavio', '3313881799', 'patricia', '3310873635', '3323829581', NULL, NULL, 0, 4, 2),
(32, 66, '221821969', 'lesly Jacqueline islas rodriguez ', 'TPSI', '8vo', 'B', 'Vespertino', 'francisco corona #1', '1', 'el campesino ', '45597', 'Tlaquepaque ', 'Jalisco ', '3339599143', '3315556173', 'lesly.islas2196@alumnos.udg.mx', '03210660159', 18, 'mexicana ', 'Gregorio Arturo Islas Delgado', '3314183430', 'Alicia Rodriguez Luna ', '3315556174', '3339599143', NULL, NULL, 0, 4, 2),
(33, 65, '222222222', 'franco luis ', 'TPSI', '8vo', 'B', 'Vespertino', 'eulotgio parrin 1447', '123', 'villa señor ', '44200', 'zapopan', 'jalisco ', '3355778634', '3312905524', 'francisco.zamora0875@alumnos.udg.mx', '51232987398', 18, 'mexicano ', 'yaser zamora lopez', '3320225524', 'elizabeth zamora lopez ', '3321880045', '3327827821', NULL, NULL, 0, 4, 2),
(34, 71, '222208926', 'Jorge Humberto Ruiz Gonzalez', 'TPSI', '8vo', 'B', 'Vespertino', 'lira ', '920', 'lomas del gallo', '04456', 'guadalajara', 'jalisco', '2443244564', '5567779877', 'jorge.ruiz0892@alumnos.udg.mx', '55565566673', 19, 'mexicano', 'martin marquez gonzalez', '3312136869', 'maria esperanza castillon gonzalez', '3340428988', '3319663188', NULL, NULL, 0, 4, 2),
(35, 60, '222207733', 'Angel Abraham Gonzalez Padilla', 'TPSI', '8vo', 'B', 'Vespertino', 'Gigantes 1268', '1268', 'Medrano', '44410', 'Guadalajara', 'Jalisco', '3336178357', '3331536709', 'angel.gonzalez0773@alumnos.udg.mx', '03210638734', 17, 'Mexicana', 'Jose Abraham Gonzalez Cruz', '3331536710', 'Nohemi Padilla Becerra', '3320615994', '3326446202', 80, 1, 0, 4, 2),
(36, 68, '222209078', 'mendez flores omar leonardo', 'TPSI', '8vo', 'B', 'Vespertino', 'isla barlovento', '1539', 'del sur', '44920', 'guadalajara', 'jalisco', '3316924844', '3311563660', 'omar.mendez0907@alumnos.udg.mx', '02210650095', 19, 'mexicana', 'jose leonardo ', '3310274737', 'mayra alejandra', '3311563662', '3316924844', NULL, NULL, 0, 4, 2),
(37, 67, '222208616', 'Martinez Lopez Karol Selene', 'TPSI', '8vo', 'B', 'Vespertino', 'san jacinto 29', '29', 'san miguel de la punta', '45425', 'tonala ', 'jalisco', '3319146117', '3313845230', 'karol.martinez0861@alumnos.udg.mx', '02230605483', 18, 'mexicana', 'luis alberto martinez larios', '3339595787', 'celina lopez esparza', '3313845230', '3319146117', NULL, NULL, 0, 4, 2),
(38, 72, '222207873', 'Geovanna Romina Castellanos Aguirre', 'TPSI', '8vo', 'B', 'Vespertino', 'Galeana', '14', 'Las puertas', '45420', 'tonala', 'jalisco', '1234567891', '1234567891', 'geovanna.castellanos0787@alumnos.udg.mx', '12345678910', 21, 'mexicana', '--------------', '1234567891', 'bertha castellanos aguirre', '3314300449', '3313290340', NULL, NULL, 0, 4, 2),
(39, 69, '222208144', 'Miramontes Ruiz Rogelio Adrian', 'TPSI', '8vo', 'B', 'Vespertino', 'av independencia 399', '1431', 'atotonilco el alto', '44430', 'guadalajalara', 'jalisco', '3327282930', '3335768527', 'rogelio.miramontes0814@alumnos.udg.mx', '04977710351', 18, 'mexicano', 'Claudio Miramontes', '3331494569', 'Monica Ruiz', '3319862531', '3327092213', NULL, NULL, 0, 4, 2),
(40, 64, '222208462', 'Mauricio Rodriguez Ayon', 'TPSI', '8vo', 'B', 'Vespertino', 'Leonor Pintado', '488', 'Insurgentes', '44820', 'Guadalajara', 'Jalisco', '3333356412', '3333487741', 'mauricio.rodriguez0846@alumnos.udg.mx', '25476543710', 18, 'Mexicano', 'Martin Rodriguez Flores', '3325000902', 'Raquel Ayon Flores', '3333101330', '3329365116', NULL, NULL, 0, 2, 2),
(41, 276, '222208209', 'Omar Alejandro Ponce Garcia', 'TPSI', '8vo', 'A', 'Matutino', 'Calle Bacalao', '213', 'Rinconada de San Sebastian', '45650', 'Tlajomulco de Zuñiga', 'Jalisco', '0000000001', '0000000001', 'omar.ponce0820@alumnos.udg.mx', '12134567889', 20, 'Mexicano', 'Jose Alfredo Ponce Camberos', '0000000001', 'Maria del Rocio Garcia Hernandez', '0000000001', '0000000000', NULL, NULL, 0, 4, 24),
(43, 278, '221234338', 'Osmar Ramirez Jimenez', 'TPSI', '8vo', 'A', 'Matutino', 'Privada Juan Manuel de Navarrete 105', '105', 'El Tapatio', '45584', 'Tlaquepaque', 'Jalisco', '5555555555', '3311146836', 'osmar.ramirez3433@alumnos.udg.mx', '10190201789', 21, 'Mexicana', 'Jose Ramirez Aranda', '3317853991', 'Judith Jiménez Angulo', '3311146836', '3320172002', NULL, NULL, 0, 4, 2),
(44, 279, '222208772', 'Nazareth Dali Gutierrez Perez', 'TPSI', '8vo', 'A', 'Matutino', 'Hernando Alvarado de Tezozomoc ', '3250', 'Jardines de la Paz', '44860', 'Guadalajara', 'Jalisco', '1578073802', '3333424758', 'nazareth.gutierrez0877@alumnos.udg.mx', '91566087105', 19, 'Mexicana', 'Jose Luis Gutierrez Rojero', '3338057419', 'Irlanda Perez Ramon', '3333350874', '3333924592', NULL, NULL, 0, 4, 21),
(45, 280, '222208152', 'Juan Alberto Rodriguez Ibarra ', 'TPSI', '8vo', 'A', 'Matutino', 'Plutarco Elias Calles ', '1787', 'Oblatos ', '44700', 'Guadalajara', 'jalisco', '3331685644', '3313201226', 'juan.rodriguez0815@alumnos.udg.mx', '21739863217', 20, 'Mexicano', 'Juan Alberto Rodriguez Romo ', '3313201225', 'Rosalina Ibarra Godinez', '3313201226', '3329338517', NULL, NULL, 0, 4, 5),
(46, 281, '222208403', 'Julio Cesar Soriano Escareno', 'TPSI', '8vo', 'A', 'Matutino', 'Calle San Francisco 2612', '28', 'Parques De Santa Cruz Del Valle', '45615', 'Tlaquepaque ', 'Jalisco', '3337974710', '3327418913', 'julio.soriano0840@alumnos.udg.mx', '04070601838', 19, 'Mexicano', 'Cesar Fabian Soriano Alatorre', '3327418913', 'Roció Magdalena Escareño Bautista', '3314654472', '3312851125', NULL, NULL, 0, 4, 13),
(48, 283, '222208594', 'Ioshua Anghelo', 'TPSI', '8vo', 'A', 'Matutino', 'batalla de zacatecas', '3677', 'isabel IV', '45677', 'tlaquepaque', 'jalisco', '2267795856', '3397820380', 'ioshua.jauregui0859@alumnos.udg.mx', '12839948466', 18, 'mexicana', 'emannuel jauregui moran', '3315859636', 'angelica quintero', '3385904367', '3311271915', NULL, NULL, 0, 4, 10),
(49, 284, '222207954', 'Diego Martinez Vasquez ', 'TPSI', '8vo', 'A', 'Matutino', 'calle tonala 383', '383', 'tlaquepaque centro', '45500', 'tlaquepaque ', 'jalisco', '3657378810', '3310616563', 'diego.martinez0795@alumnos.udg.mx', '03210673756', 18, 'mexicana', 'n/a', '3310616564', 'myriam vasquez garcia', '3310616564', '3325810731', 80, 0, 0, 4, 24),
(50, 285, '221821985', 'Fatima Dayana Fabian Contreras', 'TPSI', '8vo', 'A', 'Matutino', 'calle montañas rocosas 2160a', '2160', 'la esperanza', '44300', 'Guadalajara', 'Jalisco', '3333380628', '6642624063', 'fatima.fabian2198@alumnos.udg.mx', '03200346064', 21, 'Mexicana', 'Juan Pablo Fabian Orozco', '3329394701', 'Fatima Adriana Contreras Hernandez', '3339340946', '3342871320', NULL, NULL, 0, 4, 20),
(52, 287, '222208829', 'Leonardo Giovanni Ramirez Fregoso', 'TPSI', '8vo', 'A', 'Matutino', 'calle zalatitan', '90', 'Parques de Tlaquepaque', '45525', 'San pedro Tlaquepaque', 'Jalisco', '3311448900', '3326378666', 'leonardo.ramirez0882@alumnos.udg.mx', '23735691214', 18, 'Mexicana', 'Claudio Ramirez', '3318474219', 'Martha Fregoso', '3311855071', '3326378666', NULL, NULL, 0, 4, 10),
(53, 288, '222207997', 'Juan Pablo Flores Ceja', 'TPSI', '8vo', 'A', 'Matutino', 'guacamayo 1033', '1033', 'morelos', '44910', 'guadalajara', 'jalisco', '3338108771', '3311143918', 'juan.flores0799@alumnos.udg.mx', '10200511870', 20, 'mexicana', 'gerardo flores contreras', '3311143924', 'rosa angelica ceja villanueva', '3311143920', '3321780164', NULL, NULL, 0, 4, 24),
(54, 289, '222208977', 'Yajaira Areni Barba Salinas', 'TPSI', '8vo', 'A', 'Matutino', 'Calle Sandia', '104', 'Las Huertas', '45589', 'Tlaquepaque', 'Jalisco', '3337947641', '3317437896', 'yajaira.barba0897@alumnos.udg.mx', '17220660835', 19, 'Mexicana', 'Rodolfo Barba Ruelas', '3317437897', 'Reyna Selene Salinas Rosales', '3324536458', '3318109883', NULL, NULL, 0, 4, 16),
(55, 290, '220812745', 'Oscar Geovanni Flores Rojas', 'TPSI', '8vo', 'A', 'Matutino', 'Los Angeles 1088#', '1067', 'Quinta Velarde', '44430', 'Guadalajara', 'Jalisco', '3319245366', '3310652788', 'oscar.flores1274@alumnos.udg.mx', '13243245768', 18, 'Mexicano', 'Carlos Manuel Flores Tevez', '3310672977', 'Maria Celeste Esmeralda Rojas Rodriguez', '3310652790', '3325367051', NULL, NULL, 0, 4, 24),
(56, 291, '221822698', 'Jade Janet Gaytan Rios', 'TPSI', '8vo', 'A', 'Matutino', 'Venustiano Carranza 137B', '136', 'San Pedro', '45500', 'Tlaquepaque', 'Jalisco', '3321605155', '3339595561', 'jade.gaytan2269@alumnos.udg.mx', '13200699533', 19, 'Mexicana', 'Victor Ramon Gaytan Campos', '3310273767', 'Silvia Rios Macias', '3339595560', '3321605155', NULL, NULL, 0, 4, 24),
(57, 292, '222209086', 'Isaac Misael Gomez Casillas', 'TPSI', '8vo', 'A', 'Matutino', 'Andador Selva', '257', 'Camichines', '45407', 'Tonala', 'Jalisco', '3331517895', '3314880865', 'issac.gomez0908@alumnos.udg.mx', '75947421790', 19, 'Mexicana', 'Abel Gomez Santos', '3314880865', 'Maria Gabriela Casillas Floriano', '3322011515', '3320516684', NULL, NULL, 0, 4, 24),
(58, 293, '222207881', 'Kevin Israel Ortiz Casillas', 'TPSI', '8vo', 'A', 'Matutino', 'MANUEL PEÑA Y PEÑA', '1214', 'LOMAS DEL PARADERO', '44840', 'TLAQUEPAQUE', 'JALISCO', '3320408650', '3314342334', 'kevin.ortiz0788@alumnos.udg.mx', '54677676667', 19, 'MEXICANO', 'Israel', '3315699129', 'JOANA VERENICE', '3314342334', '3320408638', NULL, NULL, 0, 4, 24),
(59, 294, '222208365', 'Hector Jesus Esquivel Cardona ', 'TPSI', '8vo', 'A', 'Matutino', 'rio seco ', '22', 'lomas de tlaquepaque ', '45500', 'tlaquepaque ', 'Jalisco ', '3333139591', '3313266686', 'hector.esquivel0836@alumnos.udg.mx', '26873019871', 19, 'Mexicano ', 'alfredo esquivel macias ', '3315639470', 'luz maria cardona cervantes ', '3313266687', '3325890856', NULL, NULL, 0, 4, 24),
(60, 295, '222207814', 'Oswaldo Daniel Plascencia Hernandez', 'TPSI', '8vo', 'A', 'Matutino', 'av patria 37 33', '12098089', 'miravalle', '44990', 'Guadalajara. jalisco', 'jalisco', '3318729989', '3318729989', 'oswaldo.plascencia0781@alumnos.udg.mx', '21472062849', 19, 'mexicano', 'José Saúl Plascencia Mejía', '3317405186', 'monica hernandez rodriguez', '3325295915', '3325292826', NULL, NULL, 0, 4, 24),
(61, 296, '221234508', 'Jorge Gamaliel Palafox Becerra', 'TPSI', '8vo', 'A', 'Matutino', 'Nicolas Bravo', '62', 'Tonalá Centro', '45400', 'Tonalá', 'Jalisco', '4537895468', '3313520094', 'jorge.palafox3450@alumnos.udg.mx', '49485903125', 20, 'Mexicana', 'Jorge Andres Palafox Murguía', '6145547699', 'Veronica Becerra Galán', '3313520094', '3334483786', NULL, NULL, 0, 4, 11),
(62, 297, '222271369', 'Hyrum Gabriel', 'TPSI', '8vo', 'A', 'Matutino', 'Azucena No.1', '1', 'Las Huertas', '45589', 'Tlaquepaque', 'Jalisco', '3310203040', '3319809177', 'hyrum.bucio7136@alumnos.udg.mx', '03210663831', 18, 'Mexico-Americana', 'Gabriel', '3319809177', 'Gazelem ', '3319580207', '3340857573', NULL, NULL, 0, 4, 4),
(63, 298, '222208896', 'Brayan Mizael Carlos Ramirez', 'TPSI', '8vo', 'A', 'Matutino', 'Volcan miño 276', '52', 'Huentitan el bajo', '44250', 'Guadalajara', 'Jalisco', '3313731685', '3325356050', 'brayan.carlos0889@alumnos.udg.mx', '01190306447', 21, 'Mexicano', 'Mayra Carolina Carlos Ramirez', '3319924893', 'Mayra Carolina Carlos Ramirez', '3319924893', '3313731685', 2000, NULL, 0, 4, 21),
(64, 299, '221822671', 'Ariel Emmanuel Sanchez Gonzalez', 'TPSI', '8vo', 'A', 'Matutino', 'Gomez Farias', '6', 'San Jose del 15', '45696', 'El Salto', 'Jalisco', '3339965051', '3339965042', 'ariel.sanchez2267@alumnos.udg.mx', '38220677702', 18, 'Mexicana', 'Ernesto Luis Sanchez Flores', '3318763384', 'Cecilia Gonzalez Martinez', '3332709359', '3314653281', 100, NULL, 0, 4, 1),
(67, 303, '221821829', 'Ricardo Rodriguez Jaramillo', 'TPSI', '8vo', 'A', 'Matutino', 'teapan', '251', 'san pedrito', '45625', 'Tlaquepaque', 'jalisco', '3301234567', '3313094479', 'ricardo.rodriguez2182@alumnos.udg.mx', '05210624986', 18, 'Mexicana', 'Ricardo Rodriguez', '3317576921', 'elva noemi', '3313094479', '3313094477', NULL, NULL, 0, 5, 24),
(69, 306, NULL, 'Citlaly Lizeth Cruz Gomez', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'citlaly.cruz2175@alumnos.udg.mx', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL);

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
  `CarreraPreferida` varchar(255) NOT NULL,
  `Validada` tinyint(1) DEFAULT '0',
  `PracticasExtraordinarias` int DEFAULT NULL,
  PRIMARY KEY (`IdEmpresa`),
  UNIQUE KEY `RFC` (`RFC`),
  KEY `IdUsuario` (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`IdEmpresa`, `IdUsuario`, `Nombre`, `RFC`, `Telefono`, `Correo`, `DomicilioFiscal`, `Descripcion`, `Logo`, `Actividades`, `Vacantes`, `Responsable`, `Cargo`, `CarreraPreferida`, `Validada`, `PracticasExtraordinarias`) VALUES
(1, 21, 'TechNova', 'TCH123456AA1', '3312345678', 'contacto@technova.com', 'Av. Reforma 123, CDMX', 'Soluciones en desarrollo web y software empresarial.', 'logo1.png', 'Desarrollo web, soporte técnico', 5, 'Carlos Ramírez', 'Director de TI', '', 1, 0),
(2, 22, 'EcoVida', 'ECO987654BB2', '3312345679', 'info@ecovida.com', 'Calle Robles 456, GDL', 'Consultora ambiental para industrias sustentables.', 'logo2.png', 'Auditorías, gestión ambiental', 3, 'Laura Méndez', 'Gerente ambiental', '', 1, 1),
(3, 23, 'FinanzasMX', 'FIN456789CC3', '3312345680', 'rrhh@finanzas.mx', 'Av. México 789, MTY', 'Servicios financieros y contables.', 'logo3.png', 'Contabilidad, análisis financiero', 4, 'Jorge Suárez', 'Contador general', '', 0, 0),
(4, 24, 'CodeLabs', 'CLB321654DD4', '3312345681', 'admin@codelabs.dev', 'Boulevard IT 890, QRO', 'Desarrollo de software a medida.', 'logo4.png', 'Programación, pruebas QA', 2, 'Ana Torres', 'Jefa de proyectos', '', 1, 1),
(5, 25, 'InnovaMed', 'IMD852741EE5', '3312345682', 'contacto@innovamed.com', 'Col. Médica 100, GDL', 'Equipos médicos y soporte técnico.', 'logo5.png', 'Ventas, mantenimiento de equipos', 3, 'Dr. Luis Vega', 'Gerente técnico', '', 1, 0),
(6, 26, 'EduFuture', 'EDF456852FF6', '3312345683', 'info@edufuture.org', 'Av. Universidad 200, CDMX', 'Soluciones digitales para educación.', 'logo6.png', 'E-learning, plataformas educativas', 5, 'Martha Pérez', 'Coordinadora académica', '', 0, 1),
(8, 28, 'LegalHub', 'LHB147258HH8', '3312345685', 'legal@hubabogados.com', 'Despacho Central 987, MTY', 'Servicios jurídicos corporativos.', 'logo8.png', 'Asesoría legal, contratos', 1, 'Jimena Ríos', 'Abogada senior', '', 1, 1),
(9, 29, 'SmartLogistics', 'SLG951753II9', '3312345686', 'logistica@smartlog.com', 'Parque Industrial 456, GDL', 'Logística inteligente y automatizada.', 'logo9.png', 'Inventarios, transporte', 4, 'Antonio Díaz', 'Coordinador logístico', '', 0, 1),
(10, 30, 'BioNutri', 'BNR789456JJ0', '3312345687', 'contacto@bionutri.mx', 'Av. Salud 321, QRO', 'Suplementos y productos nutricionales.', 'logo10.png', 'Producción, ventas', 2, 'Claudia León', 'Nutrióloga', '', 1, 0),
(11, 31, 'UrbanWorks', 'URW369852KK1', '3312345688', 'urbano@works.com', 'Calle Central 101, CDMX', 'Consultora en urbanismo e infraestructura.', 'logo11.png', 'Planeación urbana, diseño', 2, 'Raúl Molina', 'Arquitecto jefe', '', 1, 1),
(12, 32, 'CyberSecMx', 'CSM456321LL2', '3312345689', 'contacto@cybersec.com', 'Av. Seguridad 10, MTY', 'Ciberseguridad para empresas.', 'logo12.png', 'Pentesting, firewalls', 4, 'Daniel Estrada', 'Especialista en ciberseguridad', '', 0, 0),
(13, 33, 'MediSoft', 'MDS741852MM3', '3312345690', 'info@medisoft.com', 'Centro Médico 202, GDL', 'Software para hospitales y clínicas.', 'logo13.png', 'Desarrollo, soporte', 5, 'Lucía Salas', 'Ingeniera de software', '', 1, 0),
(14, 34, 'GreenPower', 'GWP963741NN4', '3312345691', 'energia@greenpower.com', 'Zona Verde 999, QRO', 'Energía renovable y paneles solares.', 'logo14.png', 'Instalación, mantenimiento', 3, 'Iván Herrera', 'Director técnico', '', 0, 1),
(15, 35, 'Bitwise', 'BTW357159OO5', '3312345692', 'rrhh@bitwise.io', 'Parque Software 55, MTY', 'Consultora tecnológica full-stack.', 'logo15.png', 'Back-end, front-end, DevOps', 2, 'Renata Tello', 'Scrum Master', '', 1, 1),
(16, 36, 'DigiPrint', 'DGP258369PP6', '3312345693', 'ventas@digiprint.com', 'Impresores 200, CDMX', 'Soluciones de impresión digital.', 'logo16.png', 'Diseño, impresión, distribución', 3, 'Ernesto Rivas', 'Gerente de ventas', '', 1, 0),
(18, 38, 'Savia Foods', 'SVF123654RR8', '3312345695', 'info@saviafoods.mx', 'Agroalimentaria 300, QRO', 'Alimentos orgánicos y distribución.', 'logo18.png', 'Producción, logística', 2, 'Miguel Espinoza', 'Supervisor', '', 0, 0),
(19, 39, 'NeoCloud', 'NCL852963SS9', '3312345696', 'neocloud@contacto.com', 'Calle Digital 12, MTY', 'Servicios de nube y almacenamiento.', 'logo19.png', 'Hosting, backups', 5, 'Brenda Fuentes', 'Administradora de sistemas', '', 1, 1),
(20, 40, 'HealthCore', 'HCR456987TT0', '3312345697', 'salud@healthcore.com', 'Av. Bienestar 77, GDL', 'Consultoría en salud ocupacional.', 'logo20.png', 'Evaluaciones médicas, talleres', 3, 'Adrián Núñez', 'Médico ocupacional', '', 1, 0),
(21, 41, 'Innova Digital Solutions', 'IDS890123AB9', '3334567890', 'contacto@innovadigital.com', 'Calle Eclipse 202, Zona Industrial, Guadalajara, Jalisco', 'Empresa enfocada en el desarrollo de soluciones tecnológicas para el sector empresarial.', 'innova_logo.png', 'Desarrollo web, soporte técnico, consultoría TI', 3, 'Claudia Márquez', 'Directora de Tecnología', '', 1, 0),
(23, 52, 'Empresa ejemplo desde empresas', 'EDZH490302PV8', '3318879514', 'ejemplo1@gmail.com', 'Rio Autlan 1500, Olímpica, 44420, Guadalajara, Jalisco', 'Esto es unicamente un ejemplo', '1747831043385-1508px-Escudo_UdeG.svg.png', 'Escribir en latin', 10, 'Fabiola Gomez', 'Gerente', 'TPSI', 0, 0),
(24, NULL, 'Empresa', 'xxxxxxxx', '3318879514', 'empresa@empresasupercool', 'Calz. Revolución 1500, Olímpica, 44420, Guadalajara, Jalisco', 'Solo una empresa', NULL, 'Nada', 10, 'Liz', 'La meraa', '', 0, 0);

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `jefededepartamento`
--

INSERT INTO `jefededepartamento` (`IdJefeDepartamento`, `IdUsuario`, `Carrera`) VALUES
(1, 43, 'TPSI'),
(2, 44, 'TPAL'),
(3, 45, 'TPEI'),
(4, 55, 'TPSI');

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
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `opinionempresa`
--

INSERT INTO `opinionempresa` (`IdOpinion`, `IdEmpresa`, `IdUsuario`, `NombreUsuario`, `Opinion`, `Calificacion`) VALUES
(1, 21, 1, 'Juan García', 'Excelente empresa, muy profesional en desarrollo web.', 5),
(2, 22, 2, 'María López', 'Me gustó su enfoque en sustentabilidad.', 4),
(3, 23, 3, 'Carlos Ramírez', 'Buen servicio financiero, pero puede mejorar el soporte.', 3),
(4, 24, 4, 'Ana Torres', 'Software a medida que cumplió nuestras expectativas.', 5),
(5, 25, 5, 'José Martínez', 'Equipos médicos confiables y buen mantenimiento.', 4),
(6, 26, 6, 'Laura Morales', 'Plataformas educativas muy útiles y fáciles de usar.', 5),
(7, 27, 7, 'David Fernández', 'Tecnología agrícola innovadora y eficiente.', 4),
(8, 28, 8, 'Luis Navarro', 'Asesoría legal clara y rápida.', 5),
(9, 29, 9, 'Alejandra Ríos', 'Logística ágil y buena atención al cliente.', 4),
(10, 30, 10, 'Roberto Soto', 'Productos nutricionales de calidad.', 3),
(11, 31, 11, 'Daniela Vargas', 'Consultoría urbana con visión moderna.', 4),
(12, 32, 12, 'Jorge Castro', 'Ciberseguridad confiable y actualizada.', 5),
(13, 33, 13, 'Fernanda Hernández', 'Software hospitalario con buen soporte técnico.', 4),
(14, 34, 14, 'Ricardo Reyes', 'Energía renovable con resultados visibles.', 4),
(15, 35, 15, 'Brenda Sandoval', 'Consultoría tecnológica muy profesional.', 5),
(16, 36, 16, 'Eduardo Mendoza', 'Soluciones de impresión adecuadas para la empresa.', 3),
(17, 37, 17, 'Valeria Carrillo', 'Tecnología para purificación de agua muy eficiente.', 4),
(18, 38, 18, 'Andrés Estrada', 'Alimentos orgánicos frescos y bien distribuidos.', 4),
(19, 39, 19, 'Mónica Luna', 'Servicios en la nube confiables y seguros.', 5),
(20, 40, 20, 'Ricardo Rodriguez Jaramillo', 'Consultoría en salud ocupacional completa.', 4),
(21, 22, 1, 'Juan García', 'Muy buena atención personalizada y seguimiento.', 4),
(22, 23, 2, 'María López', 'El equipo es muy competente y responde rápido.', 5),
(23, 24, 3, 'Carlos Ramírez', 'Precios competitivos y excelente soporte.', 4),
(24, 25, 4, 'Ana Torres', 'Innovación constante en sus productos.', 5),
(25, 26, 5, 'José Martínez', 'Capacitación adecuada para todo el personal.', 4),
(26, 27, 6, 'Laura Morales', 'Ambiente laboral saludable y motivador.', 5),
(27, 28, 7, 'David Fernández', 'Entrega puntual y eficiente.', 4),
(28, 29, 8, 'Luis Navarro', 'Procesos internos bien organizados.', 3),
(29, 30, 9, 'Alejandra Ríos', 'Atención rápida y eficaz.', 4),
(30, 31, 10, 'Roberto Soto', 'Muy recomendable para proyectos tecnológicos.', 5),
(31, 32, 11, 'Daniela Vargas', 'Personal amable y profesional.', 4),
(32, 33, 12, 'Jorge Castro', 'Buena relación calidad-precio.', 4),
(33, 34, 13, 'Fernanda Hernández', 'Servicios actualizados y confiables.', 5),
(34, 35, 14, 'Ricardo Reyes', 'Soluciones creativas a problemas complejos.', 4),
(35, 36, 15, 'Brenda Sandoval', 'Excelente coordinación y comunicación.', 5),
(36, 37, 16, 'Eduardo Mendoza', 'Atención al detalle en cada proyecto.', 4),
(37, 37, 17, 'Valeria Carrillo', 'Cumplen con los tiempos establecidos.', 5),
(38, 38, 18, 'Andrés Estrada', 'Sistemas eficientes y fáciles de usar.', 4),
(39, 39, 19, 'Mónica Luna', 'Respuesta rápida ante cualquier inconveniente.', 5),
(40, 40, 20, 'Ricardo Rodriguez Jaramillo', 'Personal capacitado y profesional.', 4),
(41, 17, 56, '', 'hi', 2),
(42, 10, 56, '', 'normalita\n', 3),
(43, 10, 56, '', 'j', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token`
--

DROP TABLE IF EXISTS `token`;
CREATE TABLE IF NOT EXISTS `token` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Fecha_registro` datetime NOT NULL,
  `Fecha_vencimiento` datetime NOT NULL,
  `Correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Intentos` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `Rol` enum('coordinador','alumno','empresa','jefeDepartamento') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `TokenRecuperacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Expiracion` datetime DEFAULT NULL,
  PRIMARY KEY (`IdUsuario`),
  UNIQUE KEY `Correo` (`Correo`)
) ENGINE=InnoDB AUTO_INCREMENT=307 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IdUsuario`, `Correo`, `Contrasena`, `Nombre`, `Rol`, `TokenRecuperacion`, `Expiracion`) VALUES
(1, 'juan.garcia@tec.mx', '$2a$10$exampleHashA', 'Juan García', 'alumno', NULL, NULL),
(2, 'maria.lopez@tec.mx', '$2a$10$exampleHashB', 'María López', 'alumno', NULL, NULL),
(3, 'pedro.martinez@tec.mx', '$2a$10$exampleHashC', 'Pedro Martínez', 'alumno', NULL, NULL),
(5, 'carlos.ruiz@tec.mx', '$2a$10$exampleHashE', 'Carlos Ruiz', 'alumno', NULL, NULL),
(6, 'ana.sanchez@tec.mx', '$2a$10$exampleHashF', 'Ana Sánchez', 'alumno', NULL, NULL),
(7, 'jorge.ramirez@tec.mx', '$2a$10$exampleHashG', 'Jorge Ramírez', 'alumno', NULL, NULL),
(8, 'sofia.morales@tec.mx', '$2a$10$exampleHashH', 'Sofía Morales', 'alumno', NULL, NULL),
(10, 'marta.diaz@tec.mx', '$2a$10$exampleHashJ', 'Marta Díaz', 'alumno', NULL, NULL),
(11, 'andres.castillo@tec.mx', '$2a$10$exampleHashK', 'Andrés Castillo', 'alumno', NULL, NULL),
(13, 'fernando.mendoza@tec.mx', '$2a$10$exampleHashM', 'Fernando Mendoza', 'alumno', NULL, NULL),
(14, 'laura.ortega@tec.mx', '$2a$10$exampleHashN', 'Laura Ortega', 'alumno', NULL, NULL),
(16, 'silvia.soto@tec.mx', '$2a$10$exampleHashP', 'Silvia Soto', 'alumno', NULL, NULL),
(17, 'diego.perez@tec.mx', '$2a$10$exampleHashQ', 'Diego Pérez', 'alumno', NULL, NULL),
(19, 'raul.castro@tec.mx', '$2a$10$exampleHashS', 'Raúl Castro', 'alumno', NULL, NULL),
(20, 'veronica.martin@tec.mx', '$2a$10$exampleHashT', 'Verónica Martín', 'alumno', NULL, NULL),
(21, 'contacto@technova.com', '$2a$10$exampleHash1', 'Carlos Ramírez', 'empresa', NULL, NULL),
(22, 'info@ecovida.com', '$2a$10$exampleHash2', 'Laura Méndez', 'empresa', NULL, NULL),
(23, 'rrhh@finanzas.mx', '$2a$10$exampleHash3', 'Jorge Suárez', 'empresa', NULL, NULL),
(24, 'admin@codelabs.dev', '$2a$10$exampleHash4', 'Ana Torres', 'empresa', NULL, NULL),
(25, 'contacto@innovamed.com', '$2a$10$exampleHash5', 'Dr. Luis Vega', 'empresa', NULL, NULL),
(26, 'info@edufuture.org', '$2a$10$exampleHash6', 'Martha Pérez', 'empresa', NULL, NULL),
(27, 'agro@smart.com.mx', '$2a$10$exampleHash7', 'Santiago Reyes', 'empresa', NULL, NULL),
(28, 'legal@hubabogados.com', '$2a$10$exampleHash8', 'Jimena Ríos', 'empresa', NULL, NULL),
(29, 'logistica@smartlog.com', '$2a$10$exampleHash9', 'Antonio Díaz', 'empresa', NULL, NULL),
(30, 'contacto@bionutri.mx', '$2a$10$exampleHash10', 'Claudia León', 'empresa', NULL, NULL),
(31, 'urbano@works.com', '$2a$10$exampleHash11', 'Raúl Molina', 'empresa', NULL, NULL),
(32, 'contacto@cybersec.com', '$2a$10$exampleHash12', 'Daniel Estrada', 'empresa', NULL, NULL),
(33, 'info@medisoft.com', '$2a$10$exampleHash13', 'Lucía Salas', 'empresa', NULL, NULL),
(34, 'energia@greenpower.com', '$2a$10$exampleHash14', 'Iván Herrera', 'empresa', NULL, NULL),
(35, 'rrhh@bitwise.io', '$2a$10$exampleHash15', 'Renata Tello', 'empresa', NULL, NULL),
(36, 'ventas@digiprint.com', '$2a$10$exampleHash16', 'Ernesto Rivas', 'empresa', NULL, NULL),
(37, 'contacto@aquatec.com', '$2a$10$exampleHash17', 'Karla Ruiz', 'empresa', NULL, NULL),
(38, 'info@saviafoods.mx', '$2a$10$exampleHash18', 'Miguel Espinoza', 'empresa', NULL, NULL),
(39, 'neocloud@contacto.com', '$2a$10$exampleHash19', 'Brenda Fuentes', 'empresa', NULL, NULL),
(40, 'salud@healthcore.com', '$2a$10$exampleHash20', 'Adrián Núñez', 'empresa', NULL, NULL),
(41, 'contacto@innovadigital.com', '$2a$10$exampleHash21', 'Claudia Márquez', 'empresa', NULL, NULL),
(43, 'TPSI@jefe.udg.mx', '$2b$10$zrZE84yWSUvGL2GE6h5bM.IkGtxV3YYk1tSuiL2LH5wSlbhSIxZgS', 'TPSI', 'jefeDepartamento', NULL, NULL),
(44, 'TPAL@jefe.udg.mx', '$2b$10$ZzcbnjO9ppBVxoNXkc/0Iu/WX2UNSO.PTIAOZfBxuVNTm5et3pnka', 'TPAL', 'jefeDepartamento', NULL, NULL),
(45, 'TPEI@jefe.udg.mx', '$2b$10$TYrwFHiG3WPzdoUMg0GTROFifgGX..722v2w25q7bpPqCFlfDUWe6', 'TPEI', 'jefeDepartamento', NULL, NULL),
(52, 'ejemplo1@gmail.com', '$2b$10$PMTJCtZ7QbBCyK7zTEWHU.c2AJbzQJZ6Qx61kyxe6NkF2Dh2CR9Ue', 'Empresa ejemplo desde empresas', 'empresa', NULL, NULL),
(54, 'lia@alumnos.udg.mx', '$2b$10$.ueCFapkx7mOmFmFLEcZD.t6iRikg2YVE.yOxhPg0x6azFkLo0QxO', 'liz', 'coordinador', 'e53b26d0543947bdbada', '2025-05-27 15:21:12'),
(55, 'tpsi@tpsi', '$2b$10$Zu3Gi3tbWco93u3NOUE1pO6.SjcXmItnSoqN4rXtO.LKxCwYSjKue', 'Liz', 'jefeDepartamento', NULL, NULL),
(56, 'angel@alumnos.udg.mx', '123456', 'Angel', 'alumno', NULL, NULL),
(57, 'ibm@gmail.com', '$2b$10$f3lT6NozxABuIY4rgkWgVewEmBPrbBd4r5FQ1hltGSdVzMMwvWPxO', 'IBM', 'empresa', NULL, NULL),
(58, 'angel.cocina2205@alumnos.udg.mx', '$2b$10$7Hi.m8Ivix09tagdvrU.k.oD1WHS73SRYiRxGy8hQmSIqVWytQWNO', 'Angel Gabirel Cocina Valenzuela', 'alumno', NULL, NULL),
(59, 'ismael.trejo3313@alumnos.udg.mx', '$2b$10$ngp.GWSKZRc3SZhY.nj2qO1QGz/xQYIP2Xrw1fygHMxujjRXdLJkm', 'Ismael Trejo Rivas', 'alumno', NULL, NULL),
(60, 'angel.gonzalez0773@alumnos.udg.mx', '$2b$10$f33ftzM5wbknAB4w0jKubukX2jZi6UOKVa6tGQ1OpNJEO65GISCUa', 'Angel Abraham Gonzalez Padilla', 'alumno', NULL, NULL),
(61, 'erick.hernandez0806@alumnos.udg.mx', '$2b$10$JIEKDUSMzJHUNu2Txh4UWeo0pjIX6.aOoNK2yUS7A.jzoNQvY3IFm', 'Erick Hernandez Silva', 'alumno', NULL, NULL),
(62, 'nicole.salcedo0843@alumnos.udg.mx', '$2b$10$BNyrXG0gFQvoWAfN0y7aIuus00Ju4G5hZD1klRMxSCz4IerHHwwNq', 'Nicole Salcedo Torres', 'alumno', NULL, NULL),
(63, 'jennifer.perez0879@alumnos.udg.mx', '$2b$10$pM0Rg923BeGW/1pLCTQPx.pVpSn.Lrt.hxJvFbofCj5Sl3aUHTgAq', 'Jennifer Daniela Perez Vargas', 'alumno', NULL, NULL),
(64, 'mauricio.rodriguez0846@alumnos.udg.mx', '$2b$10$Ow2gNF0zc3ot.ibgEhJ3KO4Ibt3yMkz4Sxkw/BKH9MUfWcmOe1pDe', 'Mauricio Rodriguez Ayon', 'alumno', NULL, NULL),
(65, 'francisco.zamora0875@alumnos.udg.mx', '$2b$10$JvXKfUqalFnSgw4F.hjUDuqolXmZJqBGwq8QwJkseX/0fbjTGWLkK', 'Franco', 'alumno', NULL, NULL),
(66, 'lesly.islas2196@alumnos.udg.mx', '$2b$10$ibAXuSDBfTt49IVBJBosU.H3hNa2rJbomWUxleGblBtGJgBKHgb4K', 'Lesly Jacqueline Islas Rodriguez', 'alumno', NULL, NULL),
(67, 'karol.martinez0861@alumnos.udg.mx', '$2b$10$A0bL/QsUhftnmfGpPgQQnuv/bW7deNl//2NfD1VrG1td3JuCZ778G', 'Martinez Lopez Karol Selene', 'alumno', NULL, NULL),
(68, 'omar.mendez0907@alumnos.udg.mx', '$2b$10$Md8x1vRQJH.oIfdkx5WdUOENPzl696gyVzlIfla/nk7LyDvf/obYG', 'Mendez Flores Omar Leonardo', 'alumno', NULL, NULL),
(69, 'rogelio.miramontes0814@alumnos.udg.mx', '$2b$10$KhWgE441RWokuLbMu6SvW.531nAXZz/SGpC0Ag6jr69./IUQ7wveO', 'Miramontes Ruiz Rogelio Adrian', 'alumno', NULL, NULL),
(70, 'rodrigo.magallanes0821@alumnos.udg.mx', '$2b$10$Sm/0.oBou28YIicgTa0CdufnzF2.CP4YfiNCk8SvA/ISf.tFm7nvu', 'Magallanes Zarzamora Yaser', 'alumno', NULL, NULL),
(71, 'jorge.ruiz0892@alumnos.udg.mx', '$2b$10$Bur3D4fcSCjds85M4D6IGu2qmcH/c.gKvoP3UatXya73MTeQ8kIaC', 'Jorge Humberto Ruiz Gonzalez', 'alumno', NULL, NULL),
(72, 'geovanna.castellanos0787@alumnos.udg.mx', '$2b$10$eBp40KkVdXhmHZAJ58BbtO6t76wtI57F93tyvJY2lfRzUJYaTd74G', 'Castellanos Aguirre Geovanna Romina', 'alumno', NULL, NULL),
(73, 'miguel.sanchez0791@alumnos.udg.mx', '$2b$10$ZFfHtc9sBu/VmXTJYjN/m.Z63A2o/ycLjlRGk1mWEMh4Xkxsfl7/S', 'Miguel Alexis Sanchez Carranza', 'alumno', NULL, NULL),
(74, 'yerik.gutierrez0767@alumnos.udg.mx', '$2b$10$IHHT49wiGsjQTjJFr07NW.RebvW3j7Y9kuIYUg6ACZ6XnaMkGRrJm', 'Yerik Haziel Gutierrez Gonzalez', 'alumno', NULL, NULL),
(75, 'richi@tpsi.com', '$2b$10$sJW8KOo.7i/l8xo2sRf.TuPtWDvjUWrdjzA6ye0JyKOMtT9gGrwqu', 'Ricardo Tpsi', 'jefeDepartamento', NULL, NULL),
(276, 'omar.ponce0820@alumnos.udg.mx', '$2b$10$37vDY3kNjsbSz0XA7eEvLupxmA0rAKbu7bO4Bs6egVwk9JkwFM6Pe', 'Omar Alejandro Ponce Garcia', 'alumno', NULL, NULL),
(278, 'osmar.ramirez3433@alumnos.udg.mx', '$2b$10$OOxwblegjkNixp8AUvM4IeSwqrkCH1qbWh1dJZSD0G5hh76DqSs6W', 'Osmar Ramirez Jimenez', 'alumno', NULL, NULL),
(279, 'nazareth.gutierrez0877@alumnos.udg.mx', '$2b$10$BiGIY6PFrVSqxspCvN84UeMhoUYEZ51ZlTkutXmwqdckwjtvwMO1a', 'Nazareth Dali Gutierrez Perez', 'alumno', NULL, NULL),
(280, 'juan.rodriguez0815@alumnos.udg.mx', '$2b$10$p3XoaaYDyBxgf1lq/s1PJu5deWv2ZRAcZHGcK4S3MN5/bevcMXYO6', 'Juan Alberto Rodriguez Ibarra ', 'alumno', NULL, NULL),
(281, 'julio.soriano0840@alumnos.udg.mx', '$2b$10$Cbz1nATFEtm1MI93AEq3uO0JKNBSkkYU3rFW59CCgXJt/nUSJc3kK', 'Julio Cesar Soriano Escareno', 'alumno', NULL, NULL),
(283, 'ioshua.jauregui0859@alumnos.udg.mx', '$2b$10$hv4FnnLRS5GQBsInBjbwBOg8TdrHcKTO74AKfO01NXJ00z.oBKuZG', 'Ioshua Anghelo', 'alumno', NULL, NULL),
(284, 'diego.martinez0795@alumnos.udg.mx', '$2b$10$9OY/32Sl8ceFUbfJNtmRO.0udnxKQEAx3tm97VPIeExXE8o8kQ8ne', 'Diego Martinez Vasquez ', 'alumno', NULL, NULL),
(285, 'fatima.fabian2198@alumnos.udg.mx', '$2b$10$1GVq1x2NhyTSbUPXsTuizOsET8PY.aMtHiMcGtJoHxuYG2/2OvrbK', 'Fatima Dayana Fabian Contreras', 'alumno', NULL, NULL),
(287, 'leonardo.ramirez0882@alumnos.udg.mx', '$2b$10$11vZo3hcdXqBGdOjUVnjM.qGXKpC0R93EZjgGo0yP2MlWK.UTLXMy', 'Leonardo Giovanni Ramirez Fregoso', 'alumno', NULL, NULL),
(288, 'juan.flores0799@alumnos.udg.mx', '$2b$10$uQzBerzZCXhSMe86twCyJeZKqpQDL1KROkwxd8y.d65zFMPAlphxq', 'Juan Pablo Flores Ceja', 'alumno', NULL, NULL),
(289, 'yajaira.barba0897@alumnos.udg.mx', '$2b$10$p3ttMxchqFyLh8m1X8HQOOpH8rdzFYvPXauGqT8LpYeopTDtBwJny', 'Yajaira Areni Barba Salinas', 'alumno', NULL, NULL),
(290, 'oscar.flores1274@alumnos.udg.mx', '$2b$10$K3fdU0Be6kQP03xs0d0sze5GERHT.YjbpVGEmy6ldECl7CpEXK6OS', 'Oscar Geovanni Flores Rojas', 'alumno', NULL, NULL),
(291, 'jade.gaytan2269@alumnos.udg.mx', '$2b$10$AfgPHrtAI0EH9a0qt2zgU.H5i6c8FYNyngg2GHW8cy5KE5EsSv7OK', 'Jade Janet Gaytan Rios', 'alumno', NULL, NULL),
(292, 'issac.gomez0908@alumnos.udg.mx', '$2b$10$GUqRpeHYivPB53rlpsZmkugROA3xqk04XzDRzP9k2OCq0jP/HqtaK', 'Isaac Misael Gomez Casillas', 'alumno', NULL, NULL),
(293, 'kevin.ortiz0788@alumnos.udg.mx', '$2b$10$t9ObY2dV3GC1ub2CGDNsW.U2ssZ2vtEBgmyBA37Hu3gd/89uKt.kG', 'Kevin Israel Ortiz Casillas', 'alumno', NULL, NULL),
(294, 'hector.esquivel0836@alumnos.udg.mx', '$2b$10$dfc2f6YAqnQSeph9TqB5meYerJsWqBVCFRBej5uZobCRFeZCyNNLO', 'Hector Jesus Esquivel Cardona ', 'alumno', NULL, NULL),
(295, 'oswaldo.plascencia0781@alumnos.udg.mx', '$2b$10$3PijGDESquK2kg51SpQLQOojw2kkQ5KrwXppb.pUQrHlD3P0GoY0y', 'Oswaldo Daniel Plascencia Hernandez', 'alumno', NULL, NULL),
(296, 'jorge.palafox3450@alumnos.udg.mx', '$2b$10$UrqJwWsSrd7MW7mxTuyjVu2n3NpPoBAufw59ezxAH8lzNuupLh87K', 'Jorge Gamaliel Palafox Becerra', 'alumno', NULL, NULL),
(297, 'hyrum.bucio7136@alumnos.udg.mx', '$2b$10$7OH6wsT5ayr6cGw.hBtIM.6yqT4F.Uto3q2EXZYun4f9OybxHOrXW', 'Hyrum Gabriel', 'alumno', NULL, NULL),
(298, 'brayan.carlos0889@alumnos.udg.mx', '$2b$10$UC9aWyE1aRZ0Fz3Dcr9mQOfC0yC6tQotkRL6A6qHA4h8JiTrqYYQW', 'Brayan Mizael Carlos Ramirez', 'alumno', NULL, NULL),
(299, 'ariel.sanchez2267@alumnos.udg.mx', '$2b$10$TpAetJ7vGuunv2HnS47M5.5SRGmrLEIjYEIJjfbAcz1EGVIq.8.qm', 'Ariel Emmanuel Sanchez Gonzalez', 'alumno', NULL, NULL),
(300, 'ricardo.tpsi@gmail.com', '$2b$10$9bF9ZIXLzFZYE2oPyKXmgulUCay0tI6.pST68W9EN4sIduQJ3CetC', 'Ricardo', 'jefeDepartamento', NULL, NULL),
(303, 'ricardo.rodriguez2182@alumnos.udg.mx', '$2b$10$eaiMoJOLhc8teSQ2REeoqOoWNQqElztgiJQmAkq4T/OBkAbNVUfjq', 'Ricardo Rodriguez Jaramillo', 'alumno', NULL, NULL),
(304, 'coca.ina@gmail.com', '$2b$10$hhmJMmtwypUhyPCGUVlzEOVUMuQ5c/81fkt1BllGamI3CwxL7yBt6', 'camaney co', 'empresa', NULL, NULL),
(306, 'citlaly.cruz2175@alumnos.udg.mx', '$2b$10$fP5Pb//vAbmNS/Q9SnFbxeZ0Lqb/Frqbd6jfP0Xd6jF0dhaL0GZRW', 'Citlaly Lizeth Cruz Gomez', 'alumno', NULL, NULL);

--
-- Restricciones para tablas volcadas
--

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
