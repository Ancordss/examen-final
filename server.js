

const express = require('express');
const app = express();
// const { swaggerUi, swaggerSpec } = require('./swagger'); 

var bodyParser = require('body-parser');
 
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); 

let router = require('./app/routers/router.js');

const cors = require('cors')
const corsOptions = {
  origin: '*', // Permite todos los orígenes
  optionsSuccessStatus: 200 // Para algunos navegadores antiguos
};

// Aplicar CORS
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/', router);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/",(req,res) => {
  
  res.json({mesage:"Bienvenido Estudiantes de UMG"});
})

// Create a Server
const server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})