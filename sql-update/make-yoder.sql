--Update the actor with the actorId of 15 to have the firstName of 'Baby' and the lastName of 'Yoda'.

update "actors"
   set "firstName"  = 'Baby',
       "lastName"   = 'Yoda'
 where "actorId"    = 15
 returning *;
