--Get the 10 films with the highest replacementCost.
select *
    from "films"
order by "replacementCost" desc
   limit 10;
