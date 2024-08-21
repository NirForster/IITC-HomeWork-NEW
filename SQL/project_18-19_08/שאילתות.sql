--Q1
--select * from items


--Q2
--select 
--E.Date,
--I.TotAmount,
--I.UnitDesc,
--quant, 
--status,
--e.OrderNo
--from ExOrders E
--join Invoices I 
--on E.OrderNo = I.OrderNo
--where [Status] = 'closed' and
--E.Date > '2024-08-01' and E.Date < '2024-08-30' 
--and e.OrderNo = 2003
--order by E.Date


--Q3
--select 
--C.CustID, 
--C.CustName, 
--C.CustStatus,
--EO.OrderNo,
--EO.Status AS OrderStatus,
--EO.Quant,
--I.Description,
--I.Freq
--from Customers C 
--join ExOrders EO
--on C.CustID = EO.CustID 
--join items I 
--on I.Code = EO.Code
--where C.CustID = 3


----Q4
--select 
--A.InvNo,
--A.ReceiptNo,
--A.Date,
--A.Amount as TotalToPay,
--A.CrdtDebt as Paid
--from Accounting A 
----join Invoices I
----on A.InvNo = I.InvNo


--Q5
--select 
--EO.Date,
--EO.SuppDate,
--I.TotAmount,
--EO.Status as OrderStatus
--from ExOrders EO
--join Invoices I 
--on EO.OrderNo = I.OrderNo
--where EO.Status = 'Not Shipped' or EO.Status = 'reserved in Progress' 
--order by SuppDate
