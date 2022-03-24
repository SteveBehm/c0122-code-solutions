--List the number of "cities" per country in the "countries" table.
-- hint: there should be 35 in the United States
select "countries"."name" as "country",
       count("cities".*) as "totalCities"
  from "countries"
  join "cities" using ("countryId")
 group by "countryId"
