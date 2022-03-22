--Get the title, description, and releaseYear of 20 films released in 2006.
select "title",
       "description",
       "releaseYear"
  from "films"
 where "releaseYear" = '2006'
 limit 20;
