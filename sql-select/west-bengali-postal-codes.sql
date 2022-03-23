--Get the line1 and postalCode of every address in the 'West Bengali' district.
select "line1",
       "postalCode"
  from "addresses"
 where "district" = 'West Bengali';
