INSERT INTO "user" ("email", "password", "fisrtname", "lastname")
VALUES ("laurent@oclock.io", "password", "Laurent", "Oclock");

UPDATE "user" SET
    "email" = "oceane@oclock",
    "password" = "newPassword",
    "firstname" = "firstname",
    "lastname" = "lastname",
WHERE "id" = 16;
