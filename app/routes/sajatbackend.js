const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const fileupload = require("express-fileupload");

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


  app.get('/konyv', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })

    
    
    connection.connect()
    
    connection.query('SELECT * from konyv', function (err, rows, fields) {
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

  app.post('/felvitel', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })

    
    
    connection.connect()
    
    connection.query("INSERT INTO konyv  VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"' ,'"+req.body.bevitel3+"')", function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  })

  app.post('/felvitel2', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })

    
    
    connection.connect()
    
    connection.query("INSERT INTO konyv  VALUES (NULL, '"+req.body.bevitel1+"', '' ,'')", function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  })

  app.use(fileupload());
  app.post("/upload", (req, res) => {
    const newpath = "./kepek/";
    const file = req.files.file;
    const filename = file.name;
  
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        return res.status(500).send({ message: "File upload failed", code: 200 });
      }
        return res.status(200).send({ message: "File Uploaded", code: 200 });
    });
  });


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


  app.post('/torleskonyvfajtai', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })

    
    
    connection.connect()
    
    connection.query('DELETE from konyv_fajtai WHERE konyv_id='+req.body.bevitel1+'', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    
    connection.end()
  })

  app.post('/szavazatfelvitel', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })
    
    connection.connect()
    
    connection.query('INSERT INTO szavazatfelvitel values (NULL,'+req.body.bevitel1+')', function (err, rows, fields) {
      if (err) throw err
    
      console.log("Szavazatát rögzítettük!")
      res.send("Szavazatát rögzítettük!")
    })
    
    connection.end()
  
  
  
  })
  app.post('/szavazatfelvitel2', (req, res) => {
  
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })
    
    connection.connect()
    
    connection.query('UPDATE szavazatfelvitel SET szavazo_ertek=(szavazo_ertek+1)WHERE szavazat_id=2', function (err, rows, fields) {
      if (err) throw err
    
      console.log("Szavazatát rögzítettük!")
      res.send("Szavazatát rögzítettük!")
    })
    
    connection.end()
  
  
  
  })
  app.post('/szavazatfelvitel3', (req, res) => {
  
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })
    
    connection.connect()
    
    connection.query('UPDATE szavazatfelvitel SET szavazo_ertek=(szavazo_ertek+1)WHERE szavazat_id=3', function (err, rows, fields) {
      if (err) throw err
    
      console.log("Szavazatát rögzítettük!")
      res.send("Szavazatát rögzítettük!")
    })
    
    connection.end()
  
  
  
  })
  app.post('/szavazatfelvitel4', (req, res) => {
  
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })
    
    connection.connect()
    
    connection.query('UPDATE szavazatfelvitel SET szavazo_ertek=(szavazo_ertek+1)WHERE szavazat_id=4', function (err, rows, fields) {
      if (err) throw err
    
      console.log("Szavazatát rögzítettük!")
      res.send("Szavazatát rögzítettük!")
    })
    
    connection.end()
  
  
  
  })
  app.post('/szavazatfelvitel5', (req, res) => {
  
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })
    
    connection.connect()
    
    connection.query('UPDATE szavazatfelvitel SET szavazo_ertek=(szavazo_ertek+1)WHERE szavazat_id=5', function (err, rows, fields) {
      if (err) throw err
    
      console.log("Szavazatát rögzítettük!")
      res.send("Szavazatát rögzítettük!")
    })
    
    connection.end()
  
  
  
  })
  app.post('/szavazatfelvitel6', (req, res) => {
  
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'konyv_adatb'
    })
    
    connection.connect()
    
    connection.query('UPDATE szavazatfelvitel SET szavazo_ertek=(szavazo_ertek+1)WHERE szavazat_id=6', function (err, rows, fields) {
      if (err) throw err
    
      console.log("Szavazatát rögzítettük!")
      res.send("Szavazatát rögzítettük!")
    })
    
    connection.end()
  
  
  
  })








};
