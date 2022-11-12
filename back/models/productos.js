
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("productos",productosSchema)