--JOIN

--select * from products
--select * from orders
--select*from
--select*from

--select *
--from Customers c join Orders o
--on c.CustomerID = o.CustomerID

--Q1
--select ProductName, CategoryName
--from Categories c join products p
--on c.CategoryID = p.CategoryID

--Q2
--select ProductName, CompanyName
--from products p join Suppliers s
--on p.SupplierID = s.SupplierID

--Q3
--select OrderID, CompanyName
--from Orders o join Customers c
--on c.CustomerID = o.CustomerID
--where CompanyName like 'a%'

--Q4
--select RegionDescription, TerritoryDescription
--from Region r join Territories t
--on r.RegionID = t.RegionID

--Q5
--select ProductName, UnitPrice, CategoryName  
--from Products p join Categories c on p.CategoryID = c.CategoryID
--where UnitPrice > 50

--Q6
--select ProductID, SupplierID, UnitPrice, CategoryName
--from Products p join Categories c
--on p.CategoryID = c.CategoryID
--where SupplierID = 3

--Q7
--select ProductID, UnitPrice, SupplierID, CategoryName, c.CategoryID
--from Categories c join Products p
--on p.CategoryID = p.CategoryID
--where CategoryName like '%a%' 


--Q8
--select ProductName, CategoryName, CompanyName
--from Products p 
--join  Categories c on p.CategoryID = c.CategoryID
--join Suppliers s on p.SupplierID = s.SupplierID

--Q9
--select p.ProductName, c.Description, s.City
--from Products p
--join Categories c on p.CategoryID = c.CategoryID
--join Suppliers s on p.SupplierID = s.SupplierID
----where s.City = 'london' or s.City = 'Tokyo'
--where s.City in ('london', 'Tokyo')

--Q10
--select p.ProductID, c.Description, s.Country
--from Products p
--join Categories c on p.CategoryID = c.CategoryID
--join Suppliers s on p.SupplierID = p.SupplierID
--where s.Country like 'a%' 


--Q11
--select c.CompanyName, o.OrderID
--from Customers c 
--left join Orders o on c.CustomerID = o.CustomerID

--Q12
--select o.OrderID, o.OrderDate, o.ShipAddress, c.CustomerID ,c.CompanyName ,c.Phone
--from Orders o
--join Customers c on o.CustomerID = c.CustomerID
--where YEAR(o.OrderDate) = 1997 and (c.CustomerID like 'a%' or c.CustomerID like 'c%')

--Q13
--select 
--o.OrderID, 
--o.OrderDate, 
--o.ShipAddress, 
--c.CustomerID 
--,c.CompanyName 
--,c.Phone,  
--e.FirstName +' '+ e.LastName as FullName
--from Orders o
--join Customers c on o.CustomerID = c.CustomerID
--join Employees e on o.EmployeeID = e.EmployeeID
--where YEAR(o.OrderDate) = 1997 and (c.CustomerID like 'a%' or c.CustomerID like 'c%')
--order by o.OrderDate desc
