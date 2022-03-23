--Delete all films that are not rated 'G'. This should produce an error.
delete from "films"
      where "rating" != 'G'
  returning *;
