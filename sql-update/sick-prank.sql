--Give all NC-17 rated films a rating of 'G'.
update "films"
   set "rating"  = 'G'
 where "rating"  = 'NC-17'
returning *;
