INSERT INTO person_wedding
(
   [id]
   , [LastName]
   , [FirstName]
   , [dateOfBirthh]
   , [weddingID]
   , [gender]
   , [status]
)
VALUES
(
   @id
   , @LastName
   , @FirstName
   , @dateOfBirthh
   , @weddingID
   , @gender
   , @status
);

SELECT SCOPE_IDENTITY() AS num;