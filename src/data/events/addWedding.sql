INSERT INTO wedding (

        [weddingID],
        [venue],
        [weddingDate],
        [startTime],
        [endTime],
        [province],
        [publicID],
        [status]
    )
VALUES (
        @weddingID,
        @venue,
        @weddingDate,
        @startTime,
        @endTime,
        @province,
        @publicID,
        @status
    );
SELECT SCOPE_IDENTITY() AS num;