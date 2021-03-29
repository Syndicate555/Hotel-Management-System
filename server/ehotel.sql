-- SQL Commands


-- ***************************************
-- Hotel Chain Table Creation
-- ****************************************


SET SEARCH_PATH = "ehotel";

/*Create Hotel Chain Table*/
CREATE TABLE HOTEL_CHAIN(
NAME VARCHAR(50) NOT NULL,
STREET_NAME VARCHAR(50),
UNIT_NUMBER INT,
CITY VARCHAR(20),
PROVINCE_STATE VARCHAR(20),
POSTAL_CODE VARCHAR(20),
COUNTRY VARCHAR(20),
EMAIL_ADDRESS VARCHAR(50),
PHONE_NUMBER VARCHAR(20),
CONSTRAINT PK_HOTEL_CHAIN PRIMARY KEY(NAME)
);


-- ***************************************
-- Hotel Table Creation
-- ****************************************


/*Create Hotel Table*/
CREATE TABLE HOTEL(
HOTEL_ID INT NOT NULL,
NAME VARCHAR(50),
NUM_BOOKED INT,
NUM_AVAILABLE INT,
RATING INT,
EMAIL_ADDRESS VARCHAR(50),
PHONE_NUMBER VARCHAR(20),
STREET_NAME VARCHAR(50),
UNIT_NUMBER INT,
CITY VARCHAR(20),
PROVINCE_STATE VARCHAR(20),
POSTAL_CODE VARCHAR(20),
COUNTRY VARCHAR(20),
HOTEL_ROOMS INT,
CONSTRAINT PK_HOTEL PRIMARY KEY(HOTEL_ID),
CONSTRAINT FK_HOTEL_NAME FOREIGN KEY (NAME) REFERENCES HOTEL_CHAIN (NAME) MATCH SIMPLE,
CONSTRAINT HOTEL_RATING_CHECK CHECK (RATING >=1 AND RATING <= 5)
);

-- ***************************************
-- ROOM table creation
-- ****************************************


CREATE TABLE ROOM(
ROOM_NUM INT NOT NULL,
HOTEL_ID INT NOT NULL,
STATUS VARCHAR(20),
CAPACITY INT,
PRICE INT,
VIEW VARCHAR(20),
EXTENDABLE VARCHAR(20),
START_DATE DATE,
END_DATE DATE,
PENDING_BALANCE BOOLEAN,
CONSTRAINT PK_ROOM PRIMARY KEY(ROOM_NUM),
CONSTRAINT STATUS_CHECK CHECK (STATUS IN ('available','booked','rented')),
CONSTRAINT VIEW_CHECK CHECK (VIEW IN ('yes','no')),
CONSTRAINT EXTENDABLE_CHECK CHECK (EXTENDABLE IN ('yes','no'))
);

-- ***************************************
-- Employee
-- ****************************************

/*Create EMPLOYEE Table*/
CREATE TABLE EMPLOYEE(
SSN_SIN INT NOT NULL,
Username VARCHAR(20) NOT NULL,
PASSWORD VARCHAR(20) NOT NULL,
HOTEL_ID INT NOT NULL,
FNAME VARCHAR(20),
LNAME VARCHAR(20),
POSITION_ROLE VARCHAR(50),
STREET_NAME VARCHAR(20),
UNIT_NUMBER INT,
CITY VARCHAR(20),
PROVINCE_STATE VARCHAR(20),
POSTAL_CODE VARCHAR(20),
COUNTRY VARCHAR(20),
CONSTRAINT PK_EMPLOYEE PRIMARY KEY(SSN_SIN),
CONSTRAINT FK_HOTEL_EMPLOYEE FOREIGN KEY (HOTEL_ID) REFERENCES HOTEL (HOTEL_ID) MATCH SIMPLE
);

-- ***************************************
-- Customer table creation
-- ****************************************

/*Create CUSTOMER Table*/
CREATE TABLE CUSTOMER(
SSN_SIN INT NOT NULL,
PASSWORD VARCHAR(20),
FNAME VARCHAR(20),
LNAME VARCHAR(20),
REGISTRATION_DATE VARCHAR(20),
STREET_NAME VARCHAR(20),
UNIT_NUMBER INT,
CITY VARCHAR(20),
PROVINCE_STATE VARCHAR(20),
POSTAL_CODE VARCHAR(20),
COUNTRY VARCHAR(20),
CONSTRAINT PK_CUSTOMER PRIMARY KEY(SSN_SIN)
);