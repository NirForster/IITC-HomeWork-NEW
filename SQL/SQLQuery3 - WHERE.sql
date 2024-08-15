--select * from Employees
--select * from Products
--select * from Categories
--select * from Orders


--select *

--from Customers c join Orders o
--on c.CustomerID = o.CustomerID


--select 
--ProductID,
--ProductName,
--UnitPrice
--from Products

--order by UnitPrice desc

--select *
--from Orders
--where ShipCountry = 'USA'

--select 
--ProductName,
--UnitPrice + 9,
--CategoryID
--from Products
--where ProductName Like '%c%'

--select *
--from Categories
--where CategoryID > 3
--order by CategoryID desc


--select * from Orders
--where ShipRegion is null
--select 
--AVG (Freight) as 'AVG',
--sum (Freight) as 'sum',
--Max (Freight) as 'MAX Price',
--MIN (Freight) as 'MIN Price',
--count (freight) as 'count'
--from Orders

--Q1
--select 
--FirstName +' '+LastName,
--EmployeeID
--from Employees
--where EmployeeID = 3

--Q2
--select ProductName
--from Products
--where ProductID =4

--Q3
--select ProductID, ProductName, UnitPrice from Products
--where ProductID > 20
--order by UnitPrice

--Q4
--select 
--FirstName +' '+LastName as FullName,
--ReportsTo
--from Employees
--where EmployeeID = 8

--Q5
--select EmployeeID,
--FirstName +' '+LastName as FullName,
--BirthDate,
--City
--from Employees
--where city = 'london'

--Q6
--select *
--from Products
--where UnitPrice between 50 and 100
--where UnitPrice > 50 and UnitPrice < 100

--Q7
--select 
--ProductName,
--UnitPrice
--from Products
--where UnitPrice between 21.35 and 43.9
--order by UnitPrice desc

--Q8
--select 
--EmployeeID,
--LastName,
--HireDate,
--city
--from Employees
--where City in ('TACOMA', 'LONDON')

--Q9
--select 
--EmployeeID,
--FirstName,
--LastName
--from Employees
--where EmployeeID in (1, 2, 5)

--Q10
--select 
--FirstName,
--LastName,
--BirthDate
--from Employees
--where EmployeeID  not in (4, 5, 7)

--Q11
--select 
--ProductID,
--ProductName,
--CategoryID
--from Products
--where CategoryID not in ( 1, 2, 7)
--order by CategoryID

--Q12
--select 
--FirstName,
--Region
--from Employees
--where Region is null

--Q13
--select top 3 
--ProductName,
--UnitPrice
--from products
--order by UnitPrice desc

--Q14

--select 
--OrderDate,
--OrderID,
--RequiredDate
--from Orders
--where RequiredDate > '1996-10-01'

--Q15
--select
--EmployeeID,
--LastName,
--ReportsTo
--from employees
--where ReportsTo is not null
--order by EmployeeID


--Q16
--select *
--from Categories
--WHERE CategoryName LIKE '%o%'

--Q17
--select 
--CompanyName,
--Country
--from Customers
--where CompanyName LIKE '%a'

--Q18
--select 
--ProductName,
--CategoryID
--from products 
--where ProductName like '%a_'


--Q19
--select OrderID,
--CustomerID,
--EmployeeID
--from Orders 
--where YEAR(OrderDate) = '1998'
--where OrderDate between '1996-07-04 00:00:00.000' and 1997-06-01

--Q20
--select CustomerID,
--CompanyName,
--Country,
--Phone,
--Region
--from Customers
--where Country like '[M, F,G]%' and Region is null 

--Q21
--select 
--EmployeeID,
--FirstName,
--LastName,
--BirthDate,
--Country
--from Employees
--where LastName like '%[D,K]%' or YEAR(BirthDate) = 1963 

--Q22
--select 
--ProductName,
--UnitPrice,
--SupplierID
--from Products
--where UnitPrice > 30 and SupplierID in (1 ,3)

--שאלות אתגר

--Q23
--Q24




