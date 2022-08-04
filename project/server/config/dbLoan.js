const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "13.76.231.248",
    user: "adminkdcgroup",
    password: "Aa1212312121@@##",
    database: "cal2009",
    port:3306 ,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset : 'utf8mb4'
});
module.exports = db;