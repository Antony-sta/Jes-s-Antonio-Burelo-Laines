const express=require("express");

const productosController = require("../controllers/productos.controllers");


const api = express.Router();

api.post("/createproducto", productosController.createProducto);
api.get("/getproductos", productosController.getproducto);
api.get("/delproductos", productosController.getProductos);
api.put("/upadateproductos", productosController.updateProductos);
module.exports = api;