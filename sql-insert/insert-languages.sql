--Add 'HTML', 'CSS', and 'JavaScript' to the languages table and retrieve the resulting rows. The "languageId" and "updatedAt" are auto-generated.
insert into "languages" ("name")
values ('html'),
       ('css'),
       ('JavaScript')
returning *;
