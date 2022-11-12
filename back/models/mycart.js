const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    producto: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'productos',
        }
    ],
    cantidad: {
        type: Number,
        required: [true,"Ingrese la cantidad de productos"],
        default: 0
    },
    valor_total:{
        type:Number,
        default: 0.0
    },
    cliente:{
        type: String
    }
})


module.exports = mongoose.model("myCart",cartSchema);