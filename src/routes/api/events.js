"use strict";

module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/api/events",
        config: {
            handler: async request => {
                try {
                    //get the sql client registered as a plugin
                    const db = request.server.plugins.sql.client;

                    //TODO get the current auth

                    const userId = "user1234";

                    //execute query
                    const res = await db.events.getEvents( userId );

                    return res.recordset;

                } catch ( err ) {
                    console.log( err );
                }
            }
        }
    })
}