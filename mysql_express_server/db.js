const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'mytestdb',
  user: 'myuser1',
  password: 'mypass1'
})

function getallpersons() {

  return new Promise(function (resolve, reject) {
    connection.query(
      `SELECT * FROM persone`,
      function (err, row, col) {
        if (err) {
          reject(err)
        }
        else {
          resolve(row)
        }
      }
    )
  })

}

function addNewPerson(name, age, city) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `INSERT INTO persone (name,age,city) VALUES(?,?,?)`,
      [name, age, city],
      function (err, result) {
        if (err) {
          reject(err)
        }
        else {
          resolve()
        }
      }
    )
  })
}

exports = module.exports = {
  getallpersons,
  addNewPerson

}