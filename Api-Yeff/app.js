// 
const express = require('express')
const cors = require('cors')
const port = 3000
//Importar rutas
const productosRoutes =require("./Routes/producto.routes");
const app = express();

//configuracion de cors
app.use(cors())

app.use('')

//exportar express
module.exports = app

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})