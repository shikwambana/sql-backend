"use strict";

const Hapi = require("hapi");
const plugins = require("./plugins")
const routes = require("./routes");

const app = async config => {

    const { host, port } = config;

    //create instance of Hapi
    const server = new Hapi.server({host, port});

    //store config for later use
    server.app.config = config;

    //register plugins 
    await plugins.register( server );
    
    //register routes
    await routes.register( server );

    return server;
}

module.exports = app;