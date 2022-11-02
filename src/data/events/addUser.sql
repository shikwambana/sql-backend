INSERT INTO person_wedding
(
   [id]
   , [LastName]
   , [FirstName]
   , [dateOfBirth]
   , [weddingID]
   , [gender]
   , [status]
)
VALUES
(
   @id
   , @LastName
   , @FirstName
   , @dateOfBirth
   , @weddingID
   , @gender
   , @status
);

SELECT SCOPE_IDENTITY() AS num;