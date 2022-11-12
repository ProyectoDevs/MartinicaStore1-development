const nodemailer = require("nodemailer")

const sendEmail = async options => {
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "julytroldan@hotmail.com",
          pass: "rkhgalerpkmqtkkl"
        }
      });
    const mensaje={
        from: "Martinica Store <julytroldan@hotmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }
    await transport.sendMail(mensaje);
}

module.exports=sendEmail;