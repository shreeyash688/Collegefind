const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "shreeyash_0601",
    database: "college_portal"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database Connected Successfully");
    }
});

module.exports = db;