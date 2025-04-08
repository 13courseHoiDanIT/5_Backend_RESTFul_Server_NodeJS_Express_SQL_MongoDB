require('dotenv').config()
const mysql = require('mysql2/promise');

//cach cũ
//const connection = mysql.createconnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT || 3306, //default:3306
//     user: process.env.DB_USER, // default: empty
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// Create the connection to database
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306, //default:3306
    user: process.env.DB_USER, // default: empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;