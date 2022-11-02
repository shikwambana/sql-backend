"use strict";

const utils = require("../utils")

const register = async ({ sql, getConnection }) => {

    // read in all the .sql files for this folder
    const sqlQueries = await utils.loadSqlQueries("events");

    const getEvents = async userId => {

        //get a connection to SQL Server
        const cnx = await getConnection();

        //create a new request 
        const request = await cnx.request();
        //configure sql query parameters
        request.input("userId", sql.VarChar, 'user1234');

        //return the executed query
        return request.query(sqlQueries.getEvents);
    };


    const addUser = async ({ id, LastName, FirstName, dateOfBirthh, weddingID, gender, status }) => {
        const pool = await getConnection();
        const request = await pool.request();
        request.input("id", sql.VarChar, id);
        request.input("LastName", sql.VarChar, LastName);
        request.input("FirstName", sql.VarChar, FirstName);
        request.input("dateOfBirthh", sql.Date, dateOfBirthh);
        request.input("weddingID", sql.VarChar, weddingID);
        request.input("gender", sql.VarChar, gender);
        request.input("gender", sql.VarChar, gender);
        request.input("status", sql.VarChar, gender);

        return request.query(sqlQueries.addUser);
    };

    const addWedding = async ({ weddingID, venue, weddingDate, startTime, endTime, province, publicID, status }) => {
        const pool = await getConnection();
        const request = await pool.request();
        request.input("weddingID", sql.VarChar, weddingID);
        request.input("venue", sql.VarChar, venue);
        request.input("weddingDate", sql.Date, weddingDate);
        request.input("startTime", sql.VarChar, startTime);
        request.input("endTime", sql.VarChar, endTime);
        request.input("province", sql.VarChar, province);
        request.input("publicID", sql.VarChar, publicID);
        request.input("status", sql.VarChar, status);

        return request.query(sqlQueries.addWedding);
    };

    return {
        getEvents,
        addUser,
        addWedding
    };
};

module.exports = { register };