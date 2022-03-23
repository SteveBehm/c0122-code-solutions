--Delete the country with the countryId of 70.

delete from "countries"
      where "countryId"  = 70
  returning *;
