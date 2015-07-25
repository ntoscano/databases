CREATE DATABASE chat;

USE chat;

  /* Describe your table here.*/
CREATE TABLE messages (
  `messageID` INT NOT NULL AUTO_INCREMENT,
  `userID` INT NOT NULL,
  `text` varchar(160),
  `roomID` INT NOT NULL,
  `date` TIMESTAMP,
  PRIMARY KEY (`messageID`)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE `user_info` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `username` varchar(10) DEFAULT 'anonymous',
  PRIMARY KEY (`userID`)
);

CREATE TABLE `room_info` (
  `roomID` INT NOT NULL AUTO_INCREMENT,
  `room` varchar(10) NOT NULL DEFAULT 'lobby',
  PRIMARY KEY (`roomID`)
);


CREATE TABLE `User_Room` (
  `roomID` INT NOT NULL,
  `userID` INT NOT NULL
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


ALTER TABLE `messages` ADD CONSTRAINT `messages_fk0` FOREIGN KEY (`userID`) REFERENCES `user_info`(`userID`);

ALTER TABLE `messages` ADD CONSTRAINT `messages_fk1` FOREIGN KEY (`roomID`) REFERENCES `room_info`(`roomID`);

ALTER TABLE `User_Room` ADD CONSTRAINT `User_Room_fk0` FOREIGN KEY (`roomID`) REFERENCES `room_info`(`roomID`);

ALTER TABLE `User_Room` ADD CONSTRAINT `User_Room_fk1` FOREIGN KEY (`userID`) REFERENCES `user_info`(`userID`);
