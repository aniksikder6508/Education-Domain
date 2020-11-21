-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2020 at 07:52 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `courseName` varchar(255) NOT NULL,
  `teacherName` varchar(255) NOT NULL,
  `grade` varchar(255) NOT NULL,
  `timing` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `sid` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `courseName`, `teacherName`, `grade`, `timing`, `status`, `sid`) VALUES
(1122, 'ATP3', 'Md.Al-amin', 'A+', 'Sunday 11:00pm - 2:00pm', 'Pass', 2006);

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `bookId` int(25) NOT NULL,
  `bookName` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `sid` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `library`
--

INSERT INTO `library` (`bookId`, `bookName`, `author`, `category`, `sid`) VALUES
(56456, 'Advanced Learning of Webtechnology', 'Md. Mosaraf Hossain', 'CSBook', 2006);

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
(0, 'Shamim', '', 'Shamim.aiub2@gmail.com', '1997', 'Male', 'nikunja-2', '10-07-1997', '646464634', 'A+', 'Active', 'Student '),
(2000, 'noman', '2020-2000', 'noman@gmail.com', '2', 'Male', 'cumilla', '03.02.1997', '01793288603', 'AB+', 'Active', 'Admin'),
(2001, 'sakib', '2020-2001', 'nomanafd@gmail.com', 'n', 'Male', 'cumilla', '03.02.1997', '01793288603', 'AB+', 'Deactive', 'Admin'),
(2002, 'Abdullah Al Noman', '2020-2002', 'abdullahnoman1997@gmail.com', '01639439944', 'Male', 'House 176 ,Block -C ,Road -6, Bashundara r/a', '2020-11-16', '01639439944', 'AB+', 'Active', 'Admin'),
(2003, 'Fahim Abdullah', '2020-2003', 'fahim@gmail.com', '01793288603', 'Male', 'dhaka bangladesh', '2020-11-17', '01793288603', 'B+', 'Active', 'Admin'),
(2004, 'Anik sikder', '2020-2004', 'sikder@gmail.com', '01622407600', 'Male', 'dhaka bangladesh', '2020-11-03', '01622407600', 'B+', 'Active', 'Admin'),
(2005, 'Abdullah Al Noman', '2020-2005-3', 'abdullahnoman1997@gmail.com', '01793288603', 'Male', 'House 176 ,Block -C ,Road -6, Bashundara r/a', '2020-11-17', '01793288603', 'AB+', 'Active', 'Teacher'),
(2006, 'Shamim', '20-2006-3', 'shamimahamed1997@gmail.com', '1997', 'Male', 'House 176 ,Block -C ,Road -6, Bashundara r/a', '', '01639439945', 'A+', 'Active', 'Student'),
(2007, 'Shamim', 'Shamim17', 'Shamim.aiub2@gmail.com', '1997', 'Male', 'nikunja-2', '10-07-1997', '5646464', 'A+', 'Active', 'Student ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`bookId`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
