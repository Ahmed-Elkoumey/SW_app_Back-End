-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2023 at 03:24 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sc_products_list`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `sku` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `attributes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`attributes`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`sku`, `name`, `price`, `category`, `attributes`) VALUES
('B123', 'The Catcher in the Rye', '29.99', 'Book', '{\"weight\": 0.4}'),
('B234', 'To Kill a Mockingbird', '24.99', 'Book', '{\"weight\": 0.5}'),
('B345', '1984', '19.99', 'Book', '{\"weight\": 0.3}'),
('B456', 'The Great Gatsby', '21.99', 'Book', '{\"weight\": 0.4}'),
('D456', 'Star Wars: The Last Jedi', '19.99', 'DVD', '{\"size\": 700}'),
('D567', 'The Matrix', '14.99', 'DVD', '{\"size\": 650}'),
('D678', 'Pulp Fiction', '12.99', 'DVD', '{\"size\": 800}'),
('F012', 'Hemnes Bed Frame', '229.99', 'Furniture', '{\"height\": 120, \"width\": 160, \"length\": 200}'),
('F789', 'Ikea Billy Bookcase', '79.99', 'Furniture', '{\"height\": 202, \"width\": 80, \"length\": 28}'),
('F901', 'Kallax Shelving Unit', '64.99', 'Furniture', '{\"height\": 147, \"width\": 77, \"length\": 39}'),
('PDF-12345', 'The Big Data', '225.00', 'Book', '{\"weight\":\"15\"}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`sku`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
