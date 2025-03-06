async function createProducto(red,res) {
    res.status(200).sent()

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
    delProducto,
    updateProductos
}