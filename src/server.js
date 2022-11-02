"use strict";

const Hapi = require("hapi");
const routes = require("./routes");

const app = async config => {

    const { host, port } = config;

    //create instance of Hapi
    const server = new Hapi.server({host, port});

    //store config
    server.app.config = config;

    //register routes
    await routes.register( server );

    return server;
}

module.exports = app;