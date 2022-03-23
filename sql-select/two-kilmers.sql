--Get the actorId and firstName of only two actors with the lastName of 'Kilmer'.
select "actorId",
       "firstName"
  from "actors"
 where "lastName" = 'Kilmer'
 limit 2;
