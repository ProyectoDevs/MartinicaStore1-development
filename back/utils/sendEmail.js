<<<<<<< HEAD
const nodemailer= require("nodemailer")

const sendEmail = async options =>{
=======
const nodemailer = require("nodemailer")

const sendEmail = async options => {
>>>>>>> jules
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
<<<<<<< HEAD
          user: "tucorreomicrosoft",
          pass: "tuContraseñaDeAplicacion"
        }
      });
    const mensaje={
        from: "VetyShop Store <tuCorreoMicrosoft>",
=======
          user: "julytroldan@hotmail.com",
          pass: "rkhgalerpkmqtkkl"
        }
      });
    const mensaje={
        from: "Martinica Store <julytroldan@hotmail.com>",
>>>>>>> jules
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }
<<<<<<< HEAD
    await transport.sendMail(mensaje)
}
module.exports= sendEmail;
=======
    await transport.sendMail(mensaje);
}

module.exports=sendEmail;
>>>>>>> jules
