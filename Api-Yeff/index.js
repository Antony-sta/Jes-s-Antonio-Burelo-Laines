const mongoose=require('')

const  app = require('./app');
const {DB_USER, DB_NAME, DB_PASSWORD,IP_SERVER, DB_PORT} = require("./constantes");

const port = process.env.PORT ||4000;


//conexion al gestor de DB MongoDB
const uri = `mongodb://${IP_SERVER}:${DB_PORT}/${DB_NAME}`;
mongoose.connect(uri)
.the(mongoose=>console,log('conectado a la db en el puerto 27'))
.catch(err=>console.log(err));


if (error) throw error;
app.listen(port, () => {
    console.log("********************");
    console.log("***API REST ********");
    console.log("********************");
    console.log(`http://127.0.0.1:4000:`);
  });

  