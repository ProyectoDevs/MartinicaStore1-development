const nodemailer = require("nodemailer")

const sendEmail = async options => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "aab6f032579d99",
          pass: "d3ace4e4043552"
        }
      });
    const mensaje={
        from: "Martinica Store <noreply@martinicastore.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }
    await transport.sendMail(mensaje);
}

module.exports=sendEmail;