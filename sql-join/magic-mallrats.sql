--Find the first and last name of every customer who rented 'Magic Mallrats'.
select "customers"."firstName",
       "customers"."lastName"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
 where "title" = 'Magic Mallrats'
