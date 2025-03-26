// 
const express = require('express')
const cors = require('cors')
const port = 3000
const bodyParser = require("body-parser");

//Importar rutas
const productosRouter = require("./Routes/producto.routes");
const productosRoutes =require("./Routes/producto.routes");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar carpetas de cargs de filas
app.use(express.static("uploads"));
app.use
//configuracion de cors
app.use(cors())

app.use('/ap')

//exportar express
module.exports = app

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})