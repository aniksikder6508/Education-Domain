-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2020 at 10:38 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `id` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `username` varchar(16) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `gender` varchar(16) NOT NULL,
  `address` varchar(200) NOT NULL,
  `dob` varchar(20) NOT NULL,
  `contact` varchar(11) NOT NULL,
  `blood` varchar(10) NOT NULL,
  `status` varchar(15) NOT NULL,
  `type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`id`, `name`, `username`, `email`, `password`, `gender`, `address`, `dob`, `contact`, `blood`, `status`, `type`) VALUES
(2000, 'noman', '2020-2000', 'noman@gmail.com', '2', 'Male', 'cumilla', '03.02.1997', '01793288603', 'AB+', 'Active', 'Admin'),
(2001, 'sakib', '2020-2001', 'nomanafd@gmail.com', 'n', 'Male', 'cumilla', '03.02.1997', '01793288603', 'AB+', 'Deactive', 'Admin'),
(2002, 'Abdullah Al Noman', '2020-2002', 'abdullahnoman1997@gmail.com', '01639439944', 'Male', 'House 176 ,Block -C ,Road -6, Bashundara r/a', '2020-11-16', '01639439944', 'AB+', 'Active', 'Admin'),
(2003, 'Fahim Abdullah', '2020-2003', 'fahim@gmail.com', '01793288603', 'Male', 'dhaka bangladesh', '2020-11-17', '01793288603', 'B+', 'Active', 'Admin'),
(2004, 'Anik sikder', '2020-2004', 'sikder@gmail.com', '01622407600', 'Male', 'dhaka bangladesh', '2020-11-03', '01622407600', 'B+', 'Active', 'Admin'),
(2005, 'Abdullah Al Noman', '2020-2005-3', 'abdullahnoman1997@gmail.com', '01793288603', 'Male', 'House 176 ,Block -C ,Road -6, Bashundara r/a', '2020-11-17', '01793288603', 'AB+', 'Active', 'Teacher'),
(2006, 'Abdullah Al Noman', '20-2006-3', 'abdullahnoman1997@gmail.com', '01639439945', 'Male', 'House 176 ,Block -C ,Road -6, Bashundara r/a', '', '01639439945', 'A+', 'Active', 'Student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
