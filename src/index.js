"use strict";

const config = require( "./config" );
const server = require("./server");

const startServer = async () =>{
    try {

        //create instance of server app
        const app = await server( config )

        //start server
        await app.start()
        
        console.log(`Server running on http://${config.host}:${config.port}...`)
    }catch (err){

        console.log('start up error', err)
    }
}

startServer();