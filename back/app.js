const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")
<<<<<<< HEAD
//Uso de constantes importadas
app.use(express.json());
app.use(cookieParser());
=======

//Uso de constantes importadas
app.use(express.json());
app.use(cookieParser());

>>>>>>> jules
//Importar rutas
const productos=require("./routes/products")
const usuarios=require("./routes/auth")
const ordenes=require("./routes/orders")
<<<<<<< HEAD
const mycart = require("./routes/mycart")

app.use('/api',productos) //Sujeto a decision (ruta del navegador)
app.use('/api',usuarios)
app.use('/api', ordenes)
app.use('/api', mycart)

//MiddleWares para manejar errores
app.use(errorMiddleware)
    
          
            
    

          
    
    
  
module.exports=app
=======

app.use('/api',productos) //Sujeto a decision (ruta del navegador)
app.use('/api',usuarios)
app.use('/api',ordenes)

//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app
>>>>>>> jules
