--Change the country of 'United States' to be named 'Murica'.

update "countries"
   set "name"     = 'Murica'
 where "name"     = 'United States'
 returning *;
