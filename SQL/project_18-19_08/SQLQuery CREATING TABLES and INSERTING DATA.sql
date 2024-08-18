--CREATE DATABASE Project_18_08
--USE Project_18_08;

--CREATE TABLE Items (
--    Code INT PRIMARY KEY,
--    Description VARCHAR(255),
--    UnitPrice DECIMAL(10, 2),
--    Available int,
--    Saved int,
--    Waiting int,
--    Subscript int,
--    Freq DATE, 
--	SuppDate DATE,
--	OrderPercnt int,
	
--);

--CREATE TABLE Discounts (
--    CustType varchar(50) PRIMARY KEY,
--    Discnt int,
--);

--CREATE TABLE Customers (
--    CustID INT PRIMARY KEY,
--    CustType VARCHAR(50),
--    CustStatus VARCHAR(50),
--    FreezCode VARCHAR(50),
--    OverCount INT,
--    CustName VARCHAR(255),
--    DelivAddrss VARCHAR(255),
--    MailAddrss VARCHAR(255), 
--    CreditCard VARCHAR(16),
--    FOREIGN KEY (CustType) REFERENCES Discounts(CustType)
--	);

--CREATE TABLE ExOrders (
--    OrderNo INT PRIMARY KEY,
--    [Date] DATE,
--    CustID INT,
--    Code INT,
--    Quant INT,
--    Delivery INT,
--    [Address] VARCHAR(255),
--    [Status] VARCHAR(50), 
--    SuppDate DATE,
--    FOREIGN KEY (Code) REFERENCES Items(Code),
--    FOREIGN KEY (CustID) REFERENCES Customers(CustID)
--);

--CREATE TABLE Invoices (
--    InvNo INT PRIMARY KEY,
--    OrderNo INT,
--    UnitDesc VARCHAR(255),
--    [Date] DATE,
--    NoUnits INT,
--    UnitPrice DECIMAL(10, 2),
--    TotAmount DECIMAL(10, 2), 
--    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo)
--);

--CREATE TABLE Subscription (
--    SubID INT PRIMARY KEY,
--    OrderNo INT,
--    [Status] VARCHAR(50),
--    CustID INT,
--    Code INT,
--    Quant INT,
--    Freq VARCHAR(50),
--    Delivery INT,
--    NextOrder DATE,
--    Expiration DATE,
--    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo),
--    FOREIGN KEY (CustID) REFERENCES Customers(CustID),
--    FOREIGN KEY (Code) REFERENCES Items(Code)
--);

--CREATE TABLE Receipt (
--    RecNo INT PRIMARY KEY,
--    PymtDate DATE,
--    InvNo INT,
--    OrderNo INT,
--    PaidAmt DECIMAL(10, 2),
--    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo),
--    FOREIGN KEY (InvNo) REFERENCES Invoices(InvNo)
--);

--CREATE TABLE Accounting (
--    ReceiptNo INT PRIMARY KEY,
--    [Date] DATE,
--    Amount DECIMAL(10, 2),
--    InvNo INT,
--    OrderNo INT,
--    CrdtDebt DECIMAL(10, 2),
--    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo),
--    FOREIGN KEY (InvNo) REFERENCES Invoices(InvNo)
--);

--CREATE TABLE StockOrder (
--    StockDate DATE,
--    OrderNo INT,
--    Code INT,
--    Descr VARCHAR(255),
--    Quant INT,
--    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo),
--    FOREIGN KEY (Code) REFERENCES Items(Code)
--);

--CREATE TABLE DeliveryFees (
--    Delivery INT PRIMARY KEY,
--    Description VARCHAR(255),
--    DelFee DECIMAL(10, 2)
--);

--CREATE TABLE Numbers (
--    LastOrder int,
--    LastSubsc int,
--	LastStock int,
--	LastReciept int,
--    LastInvoice int,
--);

--CREATE TABLE Profiles (
--    Profile VARCHAR(50) PRIMARY KEY,
--    Act VARCHAR(255)
--);

--CREATE TABLE Users (
--    UserName VARCHAR(50) PRIMARY KEY,
--    Profile VARCHAR(50),
--    FOREIGN KEY (Profile) REFERENCES Profiles(Profile)
--);

--INSERT INTO Discounts (CustType, Discnt)
--VALUES
--('1', 10),
--('2', 15);


--INSERT INTO Customers (CustID, CustType, CustStatus, FreezCode, OverCount, CustName, DelivAddrss, MailAddrss, CreditCard)
--VALUES
--(1, '1', 'ACT', 'None', 0, 'John Doe', '123 Main St, Springfield', 'john.doe@example.com', '1234567890123456'),
--(2, '2', 'FRZ', '1', 2, 'Jane Smith', '456 Elm St, Springfield', 'jane.smith@example.com', '2345678901234567'),
--(3, '1', 'DEL', 'None', 0, 'Alice Johnson', '789 Oak St, Springfield', NULL, '3456789012345678'),
--(4, '2', 'ACT', '2', 1, 'Bob Brown', '101 Pine St, Springfield', 'bob.brown@example.com', '4567890123456789'),
--(5, '1', 'FRZ', '1', 0, 'Charlie White', '202 Cedar St, Springfield', 'charlie.white@example.com', '5678901234567890');

--INSERT INTO Profiles([Profile], [Act])
--VALUES 
--    ('Office', '10 times per day'),
--    ('Sales', 'Full access'),
--    ('Support', 'Read-only'),
--    ('Management', 'Unlimited access');

--ALTER TABLE Items
--ALTER COLUMN Freq VARCHAR(10);

--INSERT INTO Items (Code, Description, UnitPrice, Available, Saved, Waiting, Subscript, Freq, SuppDate, OrderPercnt)
--VALUES
--    (101, 'Office Chair', 100.00, 50, 10, 5, 20, 'D30', '2024-08-01', 10),  -- Every 30 days
--    (102, 'Desk Lamp', 200.00, 30, 15, 10, 25, 'W2', '2024-08-05', 15),     -- Every 2 weeks
--    (103, 'Monitor Stand', 150.00, 20, 5, 2, 10, 'M1', '2024-08-10', 20),   -- Every 1 month
--    (104, 'Ergonomic Keyboard', 250.00, 40, 20, 8, 30, 'Cx10', '2024-08-15', 25), -- On the 10th day of every month
--    (105, 'Wireless Mouse', 180.00, 60, 30, 12, 15, 'D15', '2024-08-20', 18); -- Every 15 days

-- INSERT INTO ExOrders (OrderNo, [Date], CustID, Code, Quant, Delivery, [Address], [Status], SuppDate)
--VALUES
--    (2001, '2024-08-01', 1, 101, 2, 5, '123 Main St, Springfield', 'Open', '2024-08-01'),
--    (2002, '2024-08-05', 2, 102, 1, 10, '456 Elm St, Springfield', 'In Progress', '2024-08-05'),
--    (2003, '2024-08-10', 3, 103, 5, 3, '789 Oak St, Springfield', 'Closed', '2024-08-10'),
--    (2004, '2024-08-15', 4, 104, 3, 8, '101 Pine St, Springfield', 'Reserved In Progress', '2024-08-15'),
--    (2005, '2024-08-20', 5, 105, 4, 12, '202 Cedar St, Springfield', 'Not Shipped', '2024-08-20');

--INSERT INTO StockOrder (OrderNo, StockDate, Code, [Descr], Quant)
--VALUES
--    (2001, '2024-08-01', 101, 'Initial stock order for new office chairs', 100),
--    (2002, '2024-08-05', 102, 'Order of desk lamps for the new office', 50),
--    (2003, '2024-08-10', 103, 'Replenishment of monitor stands', 30),
--    (2004, '2024-08-15', 104, 'Order of ergonomic keyboards', 40),
--    (2005, '2024-08-20', 105, 'Stock up on wireless mice', 60);

--ALTER TABLE Subscription
--ALTER COLUMN Delivery VARCHAR(10);

-- INSERT INTO Subscription (SubID, OrderNo, CustID, Code, [Status], Quant, Freq, Delivery, NextOrder, Expiration)
--VALUES
--    (6001, 2001, 1, 101, 'Active', 2, 'Monthly', 'Standard', '2024-09-01', '2025-08-01'),
--    (6002, 2002, 2, 102, 'Active', 1, 'Quarterly', 'Express', '2024-11-05', '2025-11-05'),
--    (6003, 2003, 3, 103, 'Expired', 5, 'Annually', 'Standard', '2024-08-10', '2024-08-10'),
--    (6004, 2004, 4, 104, 'Active', 3, 'Bi-Weekly', 'Standard', '2024-08-16', '2025-08-16'),
--    (6005, 2005, 5, 105, 'Pending', 4, 'Monthly', 'Express', '2024-09-20', '2025-09-20')

--INSERT INTO Invoices (InvNo, OrderNo, UnitDesc, [Date], NoUnits, UnitPrice, TotAmount)
--VALUES
--    (3001, 2001, 'Office Chair', '2024-08-01', 2, 100.00, 200.00),
--    (3002, 2002, 'Desk Lamp', '2024-08-05', 1, 200.00, 200.00),
--    (3003, 2003, 'Monitor Stand', '2024-08-10', 5, 150.00, 750.00),
--    (3004, 2004, 'Ergonomic Keyboard', '2024-08-15', 3, 250.00, 750.00),
--    (3005, 2005, 'Wireless Mouse', '2024-08-20', 4, 180.00, 720.00);

--INSERT INTO Accounting (ReceiptNo, [Date], Amount, InvNo, OrderNo, CrdtDebt)
--VALUES
--    (3001, '2024-08-02', 200.00, 3001, 2001, 200.00),  -- Receipt for Invoice 1001 related to Order 2001
--    (3002, '2024-08-06', 300.00, 3002, 2002, 300.00),  -- Receipt for Invoice 1002 related to Order 2002
--    (3003, '2024-08-11', 750.00, 3003, 2003, 750.00),  -- Receipt for Invoice 1003 related to Order 2003
--    (3004, '2024-08-16', 750.00, 3004, 2004, 750.00),  -- Receipt for Invoice 1004 related to Order 2004
--    (3005, '2024-08-22', 720.00, 3005, 2005, 720.00);  -- Receipt for Invoice 1005 related to Order 2005


--INSERT INTO DeliveryFees (Delivery, Description, DelFee)
--VALUES
--    ('dl', 'Delivery', 10.00),        
--    ('ps', 'Mail Delivery', 5.00),     
--    ('pr', 'Customer Pickup [For regular customers only]', 0.00); 

--INSERT INTO Numbers (LastOrder, LastSubsc, LastStock, LastReciept, LastInvoice)
--VALUES (2005, 6005, 2005, 3005, 3005);

--INSERT INTO Receipt (RecNo, PymtDate, InvNo, OrderNo, PaidAmt)
--VALUES
--    (1, '2024-08-02', 3001, 2001, 200.00),  -- Receipt for Invoice 3001 related to Order 2001
--    (2, '2024-08-06', 3002, 2002, 200.00),  -- Receipt for Invoice 3002 related to Order 2002
--    (3, '2024-08-11', 3003, 2003, 750.00),  -- Receipt for Invoice 3003 related to Order 2003
--    (4, '2024-08-16', 3004, 2004, 750.00),  -- Receipt for Invoice 3004 related to Order 2004
--    (5, '2024-08-22', 3005, 2005, 720.00);  -- Receipt for Invoice 3005 related to Order 2005

--INSERT INTO Users (UserName, Profile)
--VALUES
--    ('johndoe', 'Office'),        -- User with Office profile
--    ('janesmith', 'Sales'),       -- User with Sales profile
--    ('alicejohnson', 'Support'),  -- User with Support profile
--    ('bobbrown', 'Management');   -- User with Management profile

--select * from Discounts
--select* from customers
--select * from profiles
--select * from items
--select * from ExOrders
--select * from StockOrder
--select * from Subscription
--SELECT * FROM Invoices;
--select * from accounting
--select * from DeliveryFees
--select * from numbers
--select * from Receipt
--select * from users