<<<<<<< HEAD
const mongoose=require("mongoose")
const productosSchema=mongoose.Schema({
=======
const mongoose=require('mongoose');

const productosSchema = mongoose.Schema({
>>>>>>> jules
    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
<<<<<<< HEAD
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres."]
    },
    precio:{
        type: Number,
        required:[true,"Por favor registre el precio del producto."],
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    descripcion:{
      type:String,
      required:[true,"Por favor registre una descripcion para el producto."]
    },
    calificacion:{
        type: Number,
        default: 0
=======
        maxlength:[120,"El nombre del producto no debe exceder los 120 caracateres."]
    },
    precio:{
        type: Number,
        required:[true,"Por favor registre el precio del producto."], 
        maxlength:[8,"El precio del producto no puede estar por encima de 99'999.999."],
        default:0.0
    },
    descripcion:{
        type: String,
        required:[true,"Por favor registre una descripcion para el producto."], 
    },
    calificacion:{
        type: Number,
        default:0
>>>>>>> jules
    },
    imagen:[
        {
            public_id:{
<<<<<<< HEAD
                type:String,
                required:true
            },
            url:{
                type:String,
=======
                type: String,
                required:true
            },
            url:{
                type: String,
>>>>>>> jules
                required:true
            }
        }
    ],
    categoria:{
<<<<<<< HEAD
        type:String,
        required:[true,"Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Alimento seco",
                "Alimento humedo",
                "Accesorios",
                "Cuidado e Higiene",
                "Medicamentos",
                "Snacks",
                "Juguetes"
=======
        type: String,
        required:[true,"Por favor seleccione la categoría del producto."], 
        enum:{
            values:[
                "Mujer",
                "Hombre",
                "Niños",
                "Niñas",
                "Ofertas",
                "Lo nuevo"
>>>>>>> jules
            ]
        }
    },
    vendedor:{
<<<<<<< HEAD
        type:String,
        required:[true,"Por favor registre el vendedor de producto"]
    },
    inventario:{
        type: Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLength:[5,"Cantidad maxima del producto no puede sobrepasar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
=======
        type: String,
        required:[true,"Por favor registre el vendedor del producto."]
    },
    inventario:{
        type: Number,
        required: [true,"Por favor registre el stock del producto"],
        maxlength:[5,"Catidad maxima del producto no puede sobrepasar 99999 "],
        default: 0
    },
    numCalificaciones:{
        type: Number,
>>>>>>> jules
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
<<<<<<< HEAD
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
=======
                type: String,
                required:true
            },rating:{
                type: Number,
                required: true
>>>>>>> jules
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
<<<<<<< HEAD
        required: true
    },

    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("productos",productosSchema)
=======
        required:true
    },

    fechaCreation:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("productos",productosSchema);
>>>>>>> jules
