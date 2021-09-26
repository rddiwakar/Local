const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail  = (msg) =>{
    sgMail
        .send(msg)
        .then(() => console.log("Email Sent"))
        .catch((err) => console.log(err));
}
module.exports = sendEmail