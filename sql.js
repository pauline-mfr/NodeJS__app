const mysql = require('mysql');

// db connection
let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "myNodeDB"
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});

// create table if not exists
let sqlTable = "CREATE TABLE IF NOT EXISTS users (name VARCHAR(255), email VARCHAR(255))";
 conn.query(sqlTable, function (err, result) {
    if (err) throw err;
    console.log("Table created");
 });

 
 // insert request
let sqlInsert = "INSERT INTO users (name, email) VALUES ('John Pit', 'john@mail.com')";
 conn.query(sqlInsert, function (err, result) {
    if (err) throw err;
    console.log("Successfully inserted");
  });

// data request
conn.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

// update request
let sqlUpdate = "UPDATE users SET email = 'john-pit@gmail.com' WHERE name = 'John Pit'";
conn.query(sqlUpdate, function (err, result) {
  if (err) throw err;
  console.log(result.affectedRows + " email has been updated");
});


