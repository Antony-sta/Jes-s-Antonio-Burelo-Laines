const mondoose=require ("mongoose");

const productos = mondoose.Schema({
    nombre:String,
    precio:Number,
    description:String,
    cantidad:Number,
    imagep:String,

    createdAT: {type:Date, default:Date.now()}
})
module.exports=mondoose.model("producto",productos)