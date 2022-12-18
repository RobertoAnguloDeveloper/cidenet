CREATE DATABASE IF NOT EXISTS `cidenet` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `cidenet`;

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `apellido1` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `apellido2` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `nombre1` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `otros` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `pais` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `tipo_id` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `numero_id` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `area` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `estado` varchar(7) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_hora_registro` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `numero_id` (`numero_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;