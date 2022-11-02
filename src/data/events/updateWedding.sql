UPDATE wedding 
SET
        [venue] = @venue,
        [weddingDate] = @weddingDate,
        [startTime] = @startTime,
        [endTime] = @endTime,
        [province] = @province,
        [status] = @status

WHERE [weddingID] = @weddingID;