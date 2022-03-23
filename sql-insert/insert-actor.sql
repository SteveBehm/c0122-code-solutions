--Add an actor to the "actors" table. And retrieve the resulting row. The "actorId" and "updatedAt" are auto-generated.
insert into "actors" ("firstName", "lastName")
values ('Bruce', 'Willis')
returning *;
