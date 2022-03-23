--Delete the city of 'Pyongyang'.
delete from "cities"
      where "name"    = 'Pyongyang'
  returning *;
