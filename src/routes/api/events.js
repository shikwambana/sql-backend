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

    server.route( {
        method: "POST",
        path: "/api/addUser",
        config: {
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;
                    // const userId = request.auth.credentials.profile.id;
                    const { id, LastName, FirstName, dateOfBirthh, weddingID, gender,status } = request.payload;
                    
                    const res = await db.events.addUser( { id, LastName, FirstName, dateOfBirthh, weddingID, gender,status } );
                    
                    return res;

                } catch ( err ) {
                    server.log( [ "error", "api", "addUser" ], err );
                    return {
                        error: err,
                        api: 'addUser'
                    };
                }
            }
        }
    } );

    server.route( {
        method: "POST",
        path: "/api/addWedding",
        config: {
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;
                    // const userId = request.auth.credentials.profile.id;
                    const { weddingID, venue, weddingDate, startTime, endTime, province, publicID, status } = request.payload;
                    
                    const res = await db.events.addWedding( { weddingID, venue, weddingDate, startTime, endTime, province, publicID, status } );
                    
                    return res.recordset[ 0 ];

                } catch ( err ) {
                    server.log( [ "error", "api", "addWedding" ], err );
                    console.log( [ "error", "api", "addWedding" ], err );
                    return {
                        error: err,
                        api: 'addWedding'
                    };
                }
            }
        }
    } );
}