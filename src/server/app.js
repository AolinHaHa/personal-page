const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");

// Add the credentials to access your database
// var connection = mysql.createConnection({
//     host     : '182.61.169.181',
//     user     : 'test',
//     password : 'cs5328064',
//     database : 'writerpark'
// });
const connection = mysql.createConnection({
  host: "35.239.251.248",
  user: "aolin",
  password: "123!@#qwe",
  database: "test_schema",
});

// connect to mysql
connection.connect((err) => {
  if (err) {
    console.log(err.code);
    console.log(err.fatal);
  }
});
// connection.connect(function (err) {
//   // in case of error
//   if (err) {
//     console.log(err.code);
//     console.log(err.fatal);
//   }
// });

// Perform a query
$query = "SELECT * from test_table LIMIT 10";

const getQuery = async () => {
  return connection.query($query, function (err, rows, fields) {
    if (err) {
      console.log("An error ocurred performing the query.");
      return;
    }
    console.log("Query succesfully executed: ", rows);
    return rows;
  });
};

// connection.query($query, function (err, rows, fields) {
//   if (err) {
//     console.log("An error ocurred performing the query.");
//     return;
//   }
//   console.log("Query succesfully executed: ", rows);
// });

app.get("/", async (req, res) => {
  const callRes = await getQuery();
  console.log("res - ", callRes);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
