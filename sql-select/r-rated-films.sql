-- Get the filmId, title, description, and length, of all R-rated films.
select "filmId",
       "title",
       "description",
       "length"
  from "films"
 where "rating" = 'R';
