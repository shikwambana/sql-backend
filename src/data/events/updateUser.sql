UPDATE person_wedding

SET [LastName] = @LastName,
   [FirstName] = @FirstName,
   [dateOfBirth] = @dateOfBirth,
   [gender] = @gender,
   [status] = @status

WHERE [id] = @id;