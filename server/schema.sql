CREATE DATABASE chat;

USE chat;

  /* Describe your table here.*/
CREATE TABLE `user_info` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL DEFAULT 'anonymous',
  PRIMARY KEY (`userID`)
);

CREATE TABLE `messages` (
  `messageID` INT NOT NULL AUTO_INCREMENT,
  `text` varchar(160),
  `userID` INT NOT NULL,
  PRIMARY KEY (`messageID`)
);
