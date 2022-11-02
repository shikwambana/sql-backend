@block
CREATE DATABASE lenyalo;

@block 
CREATE TABLE wedding (
    weddingID varchar(10) NOT NULL PRIMARY KEY,
    venue varchar(255),
    weddingDate DATE,
    startTime TIME,
    endTime TIME,
    province varchar(255),
    publicID varchar(10)
)

@block
CREATE TABLE person_wedding (
    id varchar(10) NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    dateOfBirth DATE NOT NULL,
    weddingID varchar(10) FOREIGN KEY references wedding (weddingID),
    gender varchar(10)
)