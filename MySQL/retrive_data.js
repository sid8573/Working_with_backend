const mysql = require('mysql2')

const insert = {
  name: process.argv[2],
  age : parseInt(process.argv[3]),
  city : process.argv[4]
}

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'mytestdb',
  user: 'myuser1',
  password : 'mypass1'
})

connection.query(
  `SELECT * FROM persone`,
  function(err,result,feilds){
         if(err){
           console.log(err)
         }
         else{
           console.log(result)
           console.log(feilds)
         }

         connection.close();
  }
)