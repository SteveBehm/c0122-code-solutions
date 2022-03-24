--List the first and last name of all customers,
--plus the total amount they've spent on rentals.
--Order them by total paid, descending.
--Hint: Karl Seal should be first with $221.55 paid.
select "customers"."firstName" as "First Name",
       "customers"."lastName" as "Last Name",
       sum("payments"."amount") as "Total Spent"
  from "customers"
  join "payments" using ("customerId")
 group by "customers"."firstName",
       "customers"."lastName"
 order by "Total Spent" desc
