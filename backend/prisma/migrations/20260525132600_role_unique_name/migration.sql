-- This is an empty migration.
CREATE UNIQUE INDEX role_name_unique 
ON "Permission" (name) 
WHERE "deletedAt" IS NULL;