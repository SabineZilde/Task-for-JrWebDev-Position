-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: pineappledb
-- ------------------------------------------------------
-- Server version	8.0.27
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!50503 SET NAMES utf8 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;
--
-- Table structure for table `emailstable`
--
DROP TABLE IF EXISTS `emailstable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `emailstable` (
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(255) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE = InnoDB AUTO_INCREMENT = 14 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `emailstable`
--
LOCK TABLES `emailstable` WRITE;
/*!40000 ALTER TABLE `emailstable` DISABLE KEYS */
;
INSERT INTO `emailstable`
VALUES ('2022-01-04 11:25:03', 'ziema@hotmail.com', 1),
('2022-01-04 11:25:44', 'email@email.com', 2),
('2022-01-04 11:25:56', 'sabine@gmail.com', 3),
(
    '2022-01-04 11:26:13',
    'loaimdota_be@hotmail.com',
    4
  ),
('2022-01-04 11:26:23', 'edijs@hotmail.com', 5),
('2022-01-04 11:26:32', 'formik@protonmail.ch', 6),
(
    '2022-01-04 11:26:41',
    'juris.zarin@protonmail.ch',
    7
  ),
('2022-01-04 11:26:54', 'julio.z000@gmail.com', 8),
(
    '2022-01-04 11:27:27',
    'milda.berzina@yahoo.co.uk',
    9
  ),
('2022-01-04 11:27:34', 'dzeira@inbox.lv', 10),
('2022-01-04 11:27:54', 'janis_j@inbox.lv', 11),
('2022-01-04 11:28:29', 'pineapple@gmail.com', 12),
('2022-01-04 11:28:40', 'zoom@hotmail.com', 13);
/*!40000 ALTER TABLE `emailstable` ENABLE KEYS */
;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;
-- Dump completed on 2022-01-04 13:31:22