-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 24, 2024 at 01:57 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `groove`
--

-- --------------------------------------------------------

--
-- Table structure for table `facialdetails`
--

CREATE TABLE `facialdetails` (
  `FacialDetailID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hairstyles`
--

CREATE TABLE `hairstyles` (
  `HairstyleID` int(11) NOT NULL,
  `HairstyleName` varchar(100) NOT NULL,
  `Description` text DEFAULT NULL,
  `ImageURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `queries`
--

CREATE TABLE `queries` (
  `QueryID` int(11) NOT NULL,
  `FullName` varchar(255) DEFAULT NULL,
  `UserPhone` varchar(15) DEFAULT NULL,
  `Subject` varchar(255) DEFAULT NULL,
  `Message` text DEFAULT NULL,
  `Timestamp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `queries`
--

INSERT INTO `queries` (`QueryID`, `FullName`, `UserPhone`, `Subject`, `Message`, `Timestamp`) VALUES
(5, 'Full Name', '12321', 'Computer Science', '12321321', ''),
(6, 'dewram peiris', '0876278498', 'software enhineering', 'sduhfef;pwolfqe', '2024-03-19T18:30:00.000Z'),
(7, 'dewram peiris', '0762128374', 'software enhineering', 'nothing', '2024-03-22T18:30:00.000Z');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `ReviewID` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `HairstyleID` int(11) NOT NULL,
  `Rating` int(11) DEFAULT NULL,
  `ReviewText` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`ReviewID`, `UserID`, `HairstyleID`, `Rating`, `ReviewText`) VALUES
(4, 0, 0, 5, '12321321'),
(5, 0, 0, 3, '123123123123'),
(6, 0, 0, 5, 'ebfluwrh;gwjr\'ofq'),
(7, 0, 0, 4, 'good'),
(8, 0, 0, 5, 'very nice'),
(9, 0, 0, 3, 'abs'),
(10, 0, 0, 5, 'dewram');

-- --------------------------------------------------------

--
-- Table structure for table `userhairstyles`
--

CREATE TABLE `userhairstyles` (
  `UserID` int(11) NOT NULL,
  `HairstyleID` int(11) NOT NULL,
  `ConfidenceLevel` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(11) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Phone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `facialdetails`
--
ALTER TABLE `facialdetails`
  ADD PRIMARY KEY (`FacialDetailID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `hairstyles`
--
ALTER TABLE `hairstyles`
  ADD PRIMARY KEY (`HairstyleID`);

--
-- Indexes for table `queries`
--
ALTER TABLE `queries`
  ADD PRIMARY KEY (`QueryID`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`ReviewID`);

--
-- Indexes for table `userhairstyles`
--
ALTER TABLE `userhairstyles`
  ADD PRIMARY KEY (`UserID`,`HairstyleID`),
  ADD KEY `HairstyleID` (`HairstyleID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `facialdetails`
--
ALTER TABLE `facialdetails`
  MODIFY `FacialDetailID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hairstyles`
--
ALTER TABLE `hairstyles`
  MODIFY `HairstyleID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `queries`
--
ALTER TABLE `queries`
  MODIFY `QueryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `ReviewID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `facialdetails`
--
ALTER TABLE `facialdetails`
  ADD CONSTRAINT `facialdetails_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `userhairstyles`
--
ALTER TABLE `userhairstyles`
  ADD CONSTRAINT `userhairstyles_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`),
  ADD CONSTRAINT `userhairstyles_ibfk_2` FOREIGN KEY (`HairstyleID`) REFERENCES `hairstyles` (`HairstyleID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
