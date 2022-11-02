const mongoose=require('mongoose');

const productosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
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
    },
    imagen:[
        {
            public_id:{
                type: String,
                required:true
            },
            url:{
                type: String,
                required:true
            }
        }
    ],
    categoria:{
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
            ]
        }
    },
    vendedor:{
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
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type: String,
                required:true
            },rating:{
                type: Number,
                required: true
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
        required:true
    },

    fechaCreation:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("productos",productosSchema);