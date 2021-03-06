// Creat code to set up connection Node to MySQL, Export connection
var mysql = require("mysql");

var connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});
}

connection.connect(function (err) {
    if (err) {
        console.log("error connecting" + err.stack);
        return;
    }
    console.log("connected s id " + connection.threadId)
});

module.exports = connection;