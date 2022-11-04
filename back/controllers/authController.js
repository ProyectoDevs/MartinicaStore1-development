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

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
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
    
    tokenEnviado(user,200,res)

})

//Cerrar sesión (logout)
exports.logOut = catchAsyncErrors(async(req, res, next)=>{
    res.cookie("token", null,{ 
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Cerró sesión"
    })
})

//Recuperar contraseña - "olvido de contraseña"
exports.forgotPassword = catchAsyncErrors(async (req,res,next) =>{
    const user= await User.findOne({email:req.body.email});

    if (!user){
        return next(new ErrorHandler("Usuario no se encuentra registrado", 404))
    }
    const resetToken= user.genResetPasswordToken();
    
    await user.save({validateBeforeSave: false})

    //Crear una url para hacer el reset de la contraseña
    const resetUrl = `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`;

    const mensaje=`Hola \n\n Tu link para recuperar la contraseña es el siguiente: \n\n${resetUrl} \n\n
    Si no solicitaste este link, por favor comunícate con soporte. \n\n Att: \n Martinica Store`

    try{
        await sendEmail({
            email:user.email,
            subject: "MartinicaStore Recuperación de la contraseña",
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

// Resetear la contraseña
exports.resetPassword = catchAsyncErrors(async (req,res,next) =>{
    //Hashear el token que llego con la URl
    const resetPasswordToken= crypto.createHash("sha256").update(req.params.token).digest("hex")
    //Buscamos al usuario al que le vamos a resetear la contraseña
    const user= await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt: Date.now()}
    })
    //El usuario si está en la bd?
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

//Ver perfil de usuario
exports.getUserProfile= catchAsyncErrors(async (req, res, next) =>{
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})

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
        nombre: req.body.nombre,
        email: req.body.email,
        role: req.body.rol
    }

    const usser= await User.findByIdAndUpdate(req.params.id, nuevaData, {
        new: true,
        runValidators: true,
        useFindAndModify:false
    })

    res.status(200).json({
        success: true,
        user
    })
})

//eliminar usuario como administrador
exports.deleteUser= catchAsyncErrors(async(req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        return next (new ErrorHandler(`Usuario con id: ${req.params.id} no se encuentra en nuestra base de datos`));
    }

    await user.remove();

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