-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2025 at 07:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testsosmed`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `brand` varchar(31) NOT NULL,
  `platform` varchar(31) NOT NULL,
  `description` text DEFAULT NULL,
  `due_date` date NOT NULL,
  `payment` decimal(10,2) NOT NULL,
  `status` enum('pending','completed','canceled') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `brand`, `platform`, `description`, `due_date`, `payment`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Introducing our new smartwatch', 'Apple', 'iOS', 'Introducing the latest smartwatch from Apple with improved battery life and faster connectivity.', '2025-02-18', 99.99, 'completed', '2025-02-18 18:50:51', '2025-02-18 18:50:51'),
(2, 'New iPhone 13 Pro Max launch', 'Apple', 'iOS', 'Apple is launching the new iPhone 13 Pro Max with a 5G chip and a 6.7-inch Super Retina XDR display.', '0000-00-00', 1499.99, 'pending', '2025-02-18 18:50:51', '2025-02-18 18:50:51'),
(3, 'Samsung S14 Pro ', 'Samsung', 'Android', 'New Samsung S14 Pro launching.', '2025-02-28', 1499.99, 'canceled', '2025-02-18 18:50:51', '2025-02-18 18:50:51'),
(4, 'tes update', 'Apple', 'iOS', 'Introducing the latest smartwatch from Apple with improved battery life and faster connectivity.', '2025-01-31', 99.99, 'completed', '2025-02-19 16:52:38', '2025-02-19 17:12:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
