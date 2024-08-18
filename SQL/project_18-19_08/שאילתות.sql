--Q1
--select * from items

----Q2
--select 
--E.Date,
--i.TotAmount,
--i.UnitDesc,
--quant, 
--status,
--e.OrderNo
--from ExOrders E
--join Invoices i 
--on E.OrderNo = i.OrderNo
--order by E.Date


--SELECT 
--    eo.[Date] AS OrderDate,
--    SUM(i.UnitPrice * eo.Quant) AS TotalAmount,
--    GROUP_CONCAT(CONCAT(i.Description, ' (', eo.Quant, ')')) AS ItemsOrdered,
--    eo.[Status] AS OrderStatus
--FROM 
--    ExOrders eo
--JOIN 
--    Items i ON eo.Code = i.Code
--WHERE 
--    (eo.[Status] = 'YOUR_STATUS_CONDITION' OR 'YOUR_STATUS_CONDITION' IS NULL)
--    AND (eo.[Date] BETWEEN 'START_DATE' AND 'END_DATE' OR ('START_DATE' IS NULL AND 'END_DATE' IS NULL))
--    AND (eo.OrderNo = YOUR_ORDER_NUMBER OR YOUR_ORDER_NUMBER IS NULL)
--GROUP BY 
--    eo.[Date], eo.[Status]
--ORDER BY 
--    eo.[Date];


--Q3
select 
C.CustID, 
CustName, 
CustStatus,
OrderNo,
Status,
i.Description,
Quant,
i.Freq,
from Customers C 
join ExOrders E 
on C.CustID = E.CustID 
join items I 
on I.Code = E.Code