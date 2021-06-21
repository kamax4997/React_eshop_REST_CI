/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100406
 Source Host           : localhost:3306
 Source Schema         : rest

 Target Server Type    : MySQL
 Target Server Version : 100406
 File Encoding         : 65001

 Date: 17/06/2021 10:08:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for toys
-- ----------------------------
DROP TABLE IF EXISTS `toys`;
CREATE TABLE `toys`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` float(10, 2) NULL DEFAULT NULL,
  `stock` int(10) NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of toys
-- ----------------------------
INSERT INTO `toys` VALUES (1, '2 Model S Toy Car Alloy Model Cars Pull Back Toy Cars for 3 + Years Old (White)', '1', 17.99, 2, 'imgs/1.jpg');
INSERT INTO `toys` VALUES (2, 'Lmoy 1:32 Scale Die-cast Super Sports Car Lambo Aventador J Pull Back Cabriolet Metal Model Toy Car with Light & Sound Gift for Children', '2', 22.99, 4, 'imgs/2.jpg');
INSERT INTO `toys` VALUES (3, 'Maisto 1:24 Scale All Star Assembly Line 1929 Ford Model A Diecast Model Kit', '2', 23.13, 0, 'imgs/3.jpg');
INSERT INTO `toys` VALUES (4, 'Model S Toy Car Alloy Model Cars Pull Back Toy Cars for 3 + Years Old (White)', '1', 17.99, 10, 'imgs/4.jpg');
INSERT INTO `toys` VALUES (5, 'Jada Toys McLaren 720S Candy Red with Black Top Hyper-Spec 1/24 Diecast Model Car by Jada 32275', '1', 17.99, 0, 'imgs/5.jpg');
INSERT INTO `toys` VALUES (6, '1:32 Bugatti Veyron diecast car ,Alloy Model Cars Toy Cars for 3 to 12 Years Old by ZHFUYS (red)', '2', 13.97, 12, 'imgs/6.jpg');
INSERT INTO `toys` VALUES (7, '2018 Dodge Challenger SRT Hellcat Widebody Red 1/24 Diecast Model Car by Motormax 79350', '1', 20.70, 52, 'imgs/7.jpg');
INSERT INTO `toys` VALUES (8, 'Alloy Collectible Lamborghini Toy Vehicle Pull Back Die-Cast Car Model with Lights and Sound', '2', 20.99, 16, 'imgs/8.jpg');
INSERT INTO `toys` VALUES (9, 'ANTSIR Car Model X 1:32 Scale Alloy diecast Pull Back Electronic Toys with Lights and Music,Mini Vehicles Toys for Kids Gift (Blue)', '2', 18.99, 15, 'imgs/9.jpg');
INSERT INTO `toys` VALUES (10, 'Toy car,1:32 F12 Metal die-cast car 1/32 Model car,Red', '2', 17.99, 0, 'imgs/10.jpg');

SET FOREIGN_KEY_CHECKS = 1;
