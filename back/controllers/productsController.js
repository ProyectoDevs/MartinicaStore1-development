const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto=require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//Ver la lista de productos
exports.getProducts= catchAsyncErrors(async(req,res,next) => {
    const productos = await producto.find();
    if (!productos){
        return next(new ErrorHandler("Información no encontrada", 404))
        }
    res.status(200).json({
        success:true,
        count: productos.length,
        productos
    })
})

//Ver un producto por ID
exports.getProductById= catchAsyncErrors(async(req,res,next) => {
    const product =  await producto.findById(req.params.id);
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
        }
    res.status(200).json({
        success:true,
        message: "Aquí debajo encuentras información sobre tu producto",
        product
    })
})

//Update un producto
exports.updateProduct= catchAsyncErrors(async(req,res,next) => {
    let product = await producto.findById(req.params.id);//Variable de tipo modificable
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    //Si el objeto si existía, emtonces si ejecuto la actualización
    product=await producto.findByIdAndUpdate(req.params.id,req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators: true
    });
    //Respondió Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message: "Producto actualizado correctamente",
        product
    })
})

//Eliminar un producto
exports.deleteProduct= catchAsyncErrors(async(req,res,next) => {
    const product = await producto.findById(req.params.id);//Variable de tipo modificable
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    await product.remove();//Eliminamos el producto 
    res.status(200).json({
        success:true, 
        message: "Producto eliminado correctamente"
    });
})

//Crear nuevo producto /api/productos
exports.newProduct = catchAsyncErrors(async(req,res,next) => {
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
})


//HABLEMOS DE FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

//verProductos();Llamos al método creado para probar la consulta

//Ver por ID
function verProductoPorID(id) {
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}


