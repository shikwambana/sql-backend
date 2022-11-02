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
                    console.log("id",request)

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
        method: "GET",
        path: "/api/getUser",
        config: {
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;
                    // const userId = request.auth.credentials.profile.id;
                    
                    // const { id } = request.payload;
                    const user = request.query.id
                    const res = await db.events.getUser( user );
                    console.log(res)

                    return res['recordset'];

                } catch ( err ) {
                    server.log( [ "error", "api", "getUser" ], err );
                    console.log( [ "error", "api", "getUser" ], err );
                    return {
                        error: err,
                        api: 'getUser'
                    };
                }
            }
        }
    } );

    server.route( {
        method: "POST",
        path: "/api/addUser",
        config: {
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;
                    // const userId = request.auth.credentials.profile.id;
                    const { id, LastName, FirstName, dateOfBirth, weddingID, gender,status } = request.payload;
                    
                    const res = await db.events.addUser( { id, LastName, FirstName, dateOfBirth, weddingID, gender,status } );
                    
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
        path: "/api/updateUser",
        config: {
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;
                    // const userId = request.auth.credentials.profile.id;
                    const { id, LastName, FirstName, dateOfBirth, gender, status } = request.payload;
                    
                    const res = await db.events.updateUser( { id, LastName, FirstName, dateOfBirth, gender, status } );
                    
                    return res;

                } catch ( err ) {
                    server.log( [ "error", "api", "updateUser" ], err );
                    console.log( [ "error", "api", "updateUser" ], err );
                    return {
                        error: err,
                        api: 'updateUser'
                    };
                }
            }
        }
    } );

    server.route( {
        method: "GET",
        path: "/api/getWedding",
        config: {
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;
                    // const WeddingId = request.auth.credentials.profile.id;
                    
                    // const { id } = request.payload;
                    const wedding = request.query.id
                    const res = await db.events.getWedding( wedding );
                    console.log(res)

                    return res['recordset'];

                } catch ( err ) {
                    server.log( [ "error", "api", "getWedding" ], err );
                    console.log( [ "error", "api", "getWedding" ], err );
                    return {
                        error: err,
                        api: 'getWedding'
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
                    
                    return res;

                } catch ( err ) {
                    server.log( [ "error", "api", "addWedding" ], err );
                    return {
                        error: err,
                        api: 'addWedding'
                    };
                }
            }
        }
    } );

    server.route( {
        method: "POST",
        path: "/api/updateWedding",
        config: {
            handler: async request => {
                try {
                    const db = request.server.plugins.sql.client;
                    // const userId = request.auth.credentials.profile.id;
                    const { weddingID, venue, weddingDate, startTime, endTime, province, status } = request.payload;
        console.log('wedding',request.payload)
                    
                    const res = await db.events.updateWedding( { weddingID, venue, weddingDate, startTime, endTime, province, status } );
                    
                    return res;

                } catch ( err ) {
                    server.log( [ "error", "api", "updateWedding" ], err );
                    console.log( [ "error", "api", "updateWedding" ], err );
                    return {
                        error: err,
                        api: 'updateWedding'
                    };
                }
            }
        }
    } );
}