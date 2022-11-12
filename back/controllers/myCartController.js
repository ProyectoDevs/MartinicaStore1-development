const cartSchema = require('../models/mycart')

exports.getItemsCart = async (req, res, next) => {
    const itemsCart = await cartSchema.find().populate('producto');
    const itemsCount = await cartSchema.countDocuments();

    if (!itemsCart) {
        return res.status(404).json({
            success: false,
            error: true
        })
    }
    res.status(200).json({
        success: true,
        itemsCount,
        itemsCart
    })
}

exports.newItemCart = async (req, res, next) => {
    const itemCart = await cartSchema.create(req.body);

    res.status(201).json({
        success: true,
        itemCart
    })
}

exports.getCountItems = async (req, res, next) => {
    const itemsCount = await cartSchema.countDocuments();

    if (!itemsCount) {
        return res.status(404).json({
            success: false,
            error: true
        })
    }

    res.status(200).json({
        success: true,
        error: false,
        itemsCount
    })
}

exports.deleteItem = async(req,res,next)=>{
    const itemCart = await cartSchema.findById(req.params.id)

    if(!itemCart) {
        return res.status(404).json({
            success:false,
            message: "Item no encontrado"
        })
    }

    await itemCart.remove();
    res.status(200).json({
        success: true,
        message: "Item eliminado correctamente"
    })
}