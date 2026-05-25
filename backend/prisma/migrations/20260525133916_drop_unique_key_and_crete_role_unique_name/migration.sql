-- This is an empty migration.
DROP INDEX role_name_unique;

CREATE UNIQUE INDEX role_name_unique 
ON "Role" (name) 
WHERE "deletedAt" IS NULL;