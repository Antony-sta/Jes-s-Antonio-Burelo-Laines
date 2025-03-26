const producto = require(.../models/productos.models.js)

async function createProducto(req,res) {
 const producto =new producto (req.body);
 //console.log (producto)

 try {
 if(req.files.imagep){
    const imagepath=Imagen.getFilepath(req,file)
    producto

 }
 }
 /*try {
    const datos= await producto.save();
    res.status(200).send()
 } catch (error) {
    res.status(500).sent({msg:"error al guardar los datos"})
 } */

}
async function delProductos(red,res){
    res.json("producto eliminado")

}

async function getProductos(req,res){
    res.json("ver productos")

}

async function createProducto(req,res){
    res.json("Producto creado")

}
async function updateProductos(req,res){
    res.json("productos actializados")
}

module.exports={
    createProducto,
    getProductos,
    delProductos,
    updateProductos
}