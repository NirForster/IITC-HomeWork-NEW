--SUBQURIES
--Q1
--select ProductName
--from products 
--where 
--UnitPrice < (select UnitPrice from Products where ProductID = 8)

--Q2
--select ProductName, UnitPrice
--from products
--where UnitPrice > (select UnitPrice from Products where ProductName = 'Tofu')

--Q3
--select 
--FirstName +' ' +LastName as FullName,
--HireDate
--from Employees
--where HireDate > (SELECT HireDate FROM Employees WHERE EmployeeID = 6);

--Q4
--select ProductID, ProductName, UnitPrice
--from products
--where UnitPrice >(select 
--AVG(UnitPrice)
--from Products
--)

--Q5
--select ProductName, UnitsInStock
--from products
--where UnitsInStock < (select min(UnitsInStock) from products where CategoryID = 5)

--Q6
--select * 
--from Products 
--where categoryID = (select CategoryID from products where ProductName = 'Chai')
--and ProductName != 'Chai'

--Q7
select ProductName, UnitPrice, CategoryID 
from Products
where UnitPrice IN (select distinct UnitPrice from Categories where CategoryID = 5)

select ProductName, UnitPrice, CategoryID 
from Products
where UnitPrice = (select UnitPrice from Categories where CategoryID = 5)