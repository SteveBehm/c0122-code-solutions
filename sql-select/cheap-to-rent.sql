-- Get the filmId and title of 50 films that cost less than 1 dollar to rent.
select "filmId",
       "title"
  from "films"
 where "rentalRate" < 1.00
 limit 50;
