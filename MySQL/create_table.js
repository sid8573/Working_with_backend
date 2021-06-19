const mysql = require('mysql2')

const connection = mysql.createConnection({
  host:'localhost',
  database:'mytestdb',
  user:'myuser1',
  password :'mypass1'
})

connection.query(
  `CREATE TABLE IF NOT EXISTS persone(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    city VARCHAR(30)
  )`,
  function(err,result)
  {
    if(err) {console.log(err)}
    else {console.log("table created successfully")}

    connection.close();


  }
)