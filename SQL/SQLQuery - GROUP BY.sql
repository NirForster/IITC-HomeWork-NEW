--GROUP FUNCTIONS
--Q1
--select TOP 1 LastName
--from Employees
--order by LastName asc 

--Q2
--select TOP 1 FirstName
--from Employees
--order by FirstName desc

--Q3
--select COUNT(*) As totalEmployees
--from Employees

--Q4
--select COUNT(region) as totalRegionCount
--from Employees
--where Region is not null

--Q5
--select AVG(UnitPrice) as avgUnitPrice 
--from Products

--Q6
--SELECT 
--    MAX(UnitPrice) AS HighestUnitPrice, 
--    AVG(UnitPrice) AS AverageUnitPrice
--FROM Products;

--Q7
--select
--convert(VARCHAR, MIN(BirthDate), 113) as minBirthDate,
--convert(VARCHAR, MAX(BirthDate), 113) as maxBirthDate
--from Employees

--Q8
--select COUNT(distinct CustomerID) as UniqueCustomerCount
--from Customers

--Q9
--select count(distinct CustomerID) as UniqueCustomerCount
--from Orders

--Q10
--select 
--max(UnitPrice ) as maxPrice,
--min(UnitPrice ) as minPrice,
--avg(UnitPrice ) as avgPrice
--from products
--GROUP BY CategoryID;

--Q11
--select 
--supplierID,
--max(UnitPrice) as maxUnitPrice
--from products
--group by SupplierID
--order by SupplierID desc

--Q12
--select 
--SupplierID,
--avg(UnitsInStock) as avgUnitInStock
--from products 
--group by SupplierID 
--order by avgUnitInStock desc

----Q13
--select
--country, 
--city,
--count(CustomerID) as CustomerCount
--from Customers
--group by country, city

--Q14
--select 
--CategoryID, 
--avg(UnitPrice) as avgUnitPrice
--from Products
--where unitprice > 40
--group by CategoryID

--Q15
--select
--city,
--count(CustomerID) as CustomerCount
--from Customers
--where city = 'london'
--group by city

--Q16
select 
CategoryID,
SupplierID,
max(UnitPrice) as maxUnitPrice,
min(UnitPrice) as minUnitPrice,
avg(UnitPrice) as avgUnitPrice,
Count(UnitPrice) as UnitPriceCount
from Products
group by CategoryID, SupplierID

--Q17


--Q18


--Q19

--Q20

--Q21
