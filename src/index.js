"use strict";

const server = require("./server");

const startServer = async () =>{
    try {
        //TODO move config to separate config
        const config = {
            host: "localhost",
            port: 8090
        };

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