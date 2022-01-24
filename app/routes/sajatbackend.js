const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/konyv_fajtai', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })

    
    
    connection.connect()
    
    connection.query('SELECT * from konyv_fajtai', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  })

  app.post('/torlesszav', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })

    
    
    connection.connect()
    
    connection.query('DELETE from szavazatfelvitel WHERE szavazat_id='+req.body.bevitel+'', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  })


  app.post('/torleskonyv', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })

    
    
    connection.connect()
    
    connection.query('DELETE from konyv WHERE konyv_id='+req.body.bevitel1+'', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  })









};
