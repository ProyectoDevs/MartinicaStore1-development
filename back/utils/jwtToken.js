<<<<<<< HEAD
//Crear y enviar un token guarado en una cookie
const tokenEnviado= (user, statusCode, res) =>{

    //Creamos el token
    const token = user.getJwtToken();

    //Opciones del token
=======
//Crear y enviar un token guardado en una cookie
const tokenEnviado= (user, statusCode, res) => {
    //creamos el token
    const token = user.getJwtToken();

    //opciones del token
>>>>>>> jules
    const Opciones= {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME*24*60*60*1000
        ),
        httpOnly: true
    }
<<<<<<< HEAD

=======
    
>>>>>>> jules
    res.status(statusCode).cookie("token", token, Opciones).json({
        success:true,
        token,
        user
    })
}

<<<<<<< HEAD
module.exports= tokenEnviado;
=======
module.exports = tokenEnviado;
>>>>>>> jules
