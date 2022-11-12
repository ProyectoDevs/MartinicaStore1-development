<<<<<<< HEAD
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto")

//Registrar un nuevo usuario /api/usuario/registro
exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password} = req.body;
=======
const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const { response } = require("express");
const { json } = require("body-parser");

//Registrar un nuevo usuario /api/usuario/registro
exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password}= req.body;

>>>>>>> jules
    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
<<<<<<< HEAD
            public_id:"ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp=CAU"
        }
    })
    tokenEnviado(user,201,res)
})
//Iniciar Sesion - Login
exports.loginUser = catchAsyncErrors(async(req, res, next)=>{
    const { email, password} =  req.body;
    //revisar si los campos estan completos
    if (!email || !password){
        return next(new ErrorHandler("Por favor ingrese email & Contraseña", 400))
    }
    //Buscar al usuario en nuestra base de datos
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Email o contraseña invalidos", 401))
    }
    //Comparar contraseñas, verificar si está bien
    const contrasenaOK= await user.compararPass(password);
    if (!contrasenaOK){
        return next(new ErrorHandler("Contraseña invalida",401))
    }

=======
            public_id: "b25d4bb67c1ebd196af3",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp=CAU"
        }
    })
    const token= user.getJwtToken();
})

//Iniciar Sesión -Login
exports.loginUser= catchAsyncErrors(async(req,res,next) => {
    const {email,password} = req.body;

    //Revisar si los campos están completos
    if(!email || !password) {
        return next(new ErrorHandler("Por favor ingrese email y contraseña", 400))
    }

    //Buscar al usuario en la base de datos
    const user = await User.findOne({email}).select("+password")
    if (!user){
        return next(new ErrorHandler("Email o contraseña inválidos", 401))
    }

    //Comparar contraseñas y verificar si está bien
    const contrasenaOK= await user.compararPass(password);

    if (!contrasenaOK) {
        return next(new ErrorHandler("Contraseña inválida", 401))
    }
    
>>>>>>> jules
    tokenEnviado(user,200,res)

})

<<<<<<< HEAD
//Cerrar Sesion (logout)
exports.logOut = catchAsyncErrors(async(req, res, next)=>{
    res.cookie("token",null, {
         expires: new Date(Date.now()),
         httpOnly: true
    })

    res.status(200).json({
        success:true,
=======
//Cerrar sesión (logout)
exports.logOut = catchAsyncErrors(async(req, res, next)=>{
    res.cookie("token", null,{ 
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
>>>>>>> jules
        message: "Cerró sesión"
    })
})

<<<<<<< HEAD
//Olvide mi contraseña, recuperar contraseña
exports.forgotPassword = catchAsyncErrors ( async( req, res, next) =>{
    const user= await User.findOne({email: req.body.email});
=======
//Recuperar contraseña - "olvido de contraseña"
exports.forgotPassword = catchAsyncErrors(async (req,res,next) =>{
    const user= await User.findOne({email:req.body.email});
>>>>>>> jules

    if (!user){
        return next(new ErrorHandler("Usuario no se encuentra registrado", 404))
    }
    const resetToken= user.genResetPasswordToken();
<<<<<<< HEAD

    await user.save({validateBeforeSave: false})

    //Crear una url para hacer el reset de la contraseña
    const resetUrl= `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`;

    const mensaje=`Hola!\n\nTu link para ajustar una nueva contraseña es el 
    siguiente: \n\n${resetUrl}\n\n
    Si no solicitaste este link, por favor comunicate con soporte.\n\n Att:\nVetyShop Store`
=======
    
    await user.save({validateBeforeSave: false})

    //Crear una url para hacer el reset de la contraseña
    const resetUrl = `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`;

    const mensaje=`Hola \n\n Tu link para recuperar la contraseña es el siguiente: \n\n${resetUrl} \n\n
    Si no solicitaste este link, por favor comunícate con soporte. \n\n Att: \n Martinica Store`
>>>>>>> jules

    try{
        await sendEmail({
            email:user.email,
<<<<<<< HEAD
            subject: "VetyShop Recuperación de la contraseña",
=======
            subject: "MartinicaStore Recuperación de la contraseña",
>>>>>>> jules
            mensaje
        })
        res.status(200).json({
            success:true,
            message: `Correo enviado a: ${user.email}`
        })
    }catch(error){
        user.resetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;

        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message, 500))
    }
})

<<<<<<< HEAD

//Resetear la contraseña
exports.resetPassword = catchAsyncErrors(async (req,res,next) =>{
    //Hash el token que llego con la URl
=======
// Resetear la contraseña
exports.resetPassword = catchAsyncErrors(async (req,res,next) =>{
    //Hashear el token que llego con la URl
>>>>>>> jules
    const resetPasswordToken= crypto.createHash("sha256").update(req.params.token).digest("hex")
    //Buscamos al usuario al que le vamos a resetear la contraseña
    const user= await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt: Date.now()}
    })
<<<<<<< HEAD
    //El usuario si esta en la base de datos?
=======
    //El usuario si está en la bd?
>>>>>>> jules
    if(!user){
        return next(new ErrorHandler("El token es invalido o ya expiró",400))
    }
    //Diligenciamos bien los campos?
    if(req.body.password!==req.body.confirmPassword){
        return next(new ErrorHandler("Contraseñas no coinciden",400))
    }

    //Setear la nueva contraseña
    user.password= req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;

    await user.save();
    tokenEnviado(user, 200, res)
})

<<<<<<< HEAD
//Ver perfil de usuario (Usuario que esta logueado)
exports.getUserProfile= catchAsyncErrors( async (req, res, next)=>{
    const user= await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user
    })
})


//Update Contraseña (usuario logueado)
exports.updatePassword= catchAsyncErrors(async (req, res, next) =>{
    const user= await User.findById(req.user.id).select("+password");

    //Revisamos si la contraseña vieja es igual a la nueva
    const sonIguales = await user.compararPass(req.body.oldPassword)

    if (!sonIguales){
        return next (new ErrorHandler("La contraseña actual no es correcta", 401))
    }

    user.password= req.body.newPassword;
    await user.save();

    tokenEnviado(user, 200, res)
})


//Update perfil de usuario (logueado)
exports.updateProfile= catchAsyncErrors(async(req,res,next)=>{
    //Actualizar el email por user a decisiòn de cada uno
    const newUserData ={
        nombre: req.body.nombre,
        email: req.body.email
    }

    //updata Avatar: pendiente

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new:true,
        runValidators:true,
        useFindAndModify: false
    })

    res.status(200).json({
        success:true,
        user
    })
})


//Servicios controladores sobre usuarios por parte de los ADMIN

//Ver todos los usuarios
exports.getAllUsers = catchAsyncErrors(async(req, res, next)=>{
    const users = await User.find();

    res.status(200).json({
        success:true,
        users
    })
})

//Ver el detalle de 1 usuario
exports.getUserDetails= catchAsyncErrors(async(req, res, next)=>{
    const user= await User.findById(req.params.id);

    if (!user){
        return next(new ErrorHandler(`No se ha encontrado ningun usuario con el id: ${req.params.id}`))
    }
=======
//Ver perfil de usuario
exports.getUserProfile= catchAsyncErrors(async (req, res, next) =>{
    const user = await User.findById(req.user.id);
>>>>>>> jules

    res.status(200).json({
        success: true,
        user
    })
})

<<<<<<< HEAD
//Actualizar perfil de usuario (como administrador)
exports.updateUser= catchAsyncErrors (async(req, res, next)=>{
    const nuevaData={
=======
//Update contraseña
exports.updatePassword= catchAsyncErrors(async (req, res, next) =>{
    const user = await User.findById(req.user.id).select("+password");

    //Revisión si la contraseña vieja es igual a la nueva
    const samePassword = await user.compararPass(req.body.oldPassword)

    if(!samePassword){
        return next (new ErrorHandler("La contraseña actual no es correcta"))
    }

    user.password = res.body.newPassword
    await user.save();

    tokenEnviado(user, 200, res);
})

//Update perfil de usuario
exports.updateProfile = catchAsyncErrors(async(req, res, next)=>{

    const newUserData = {
        nombre: req.body.nombre,
        email: req.body.email
    }

    //update Avatar

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success: true,
        user
    })
        
});

//Servicios controladores sobre usuarios por parte de ADMIN

//Ver todos los usuarios
exports.getAllUsers = catchAsyncErrors(async(req, res, next)=>{
    const users= await User.find();

    res.status(200).json({
        success: true,
        users
    })
});

//Ver el detalle de un usuario
exports.getUserDetails= catchAsyncErrors(async(req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`No se ha encontrado ningún usuario con el id: ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        useer
    })
})

//actualizar perfil de usuario como administrador
exports.updateUser= catchAsyncErrors(async(req, res, next)=>{
    const nuevaData= {
>>>>>>> jules
        nombre: req.body.nombre,
        email: req.body.email,
        role: req.body.rol
    }

<<<<<<< HEAD
    const user= await User.findByIdAndUpdate(req.params.id, nuevaData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success:true,
=======
    const usser= await User.findByIdAndUpdate(req.params.id, nuevaData, {
        new: true,
        runValidators: true,
        useFindAndModify:false
    })

    res.status(200).json({
        success: true,
>>>>>>> jules
        user
    })
})

<<<<<<< HEAD

//Eliminar usuario (admin)
exports.deleteUser= catchAsyncErrors (async (req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`Usuario con id: ${req.params.id} 
        no se encuentra en nuestra base de datos`))
=======
//eliminar usuario como administrador
exports.deleteUser= catchAsyncErrors(async(req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        return next (new ErrorHandler(`Usuario con id: ${req.params.id} no se encuentra en nuestra base de datos`));
>>>>>>> jules
    }

    await user.remove();

<<<<<<< HEAD
    res.status(200).json({
        success:true,
        message:"Usuario eliminado correctamente"
    })
})
=======
    response.status(200).json({
        success:true,
        message:"Usuario eliminado correctamente"
    })
})

exports.inactiveuser = catchAsyncErrors(async(req, res, next)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        message:"Se ha inactivado su usuario"
    }
   user.estado="inactivo"
   res.status(200).json({
        success: true,
        message:"Se inactivó el usuario correctamente"
   })
});
>>>>>>> jules
