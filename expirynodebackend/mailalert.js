const nodemailer = require("nodemailer");

async function mailalert(sub, msg){
    // console.log(sub)
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service : 'gmail',
        auth: {
        user: 'labriocheu@gmail.com', 
        pass: 'AlAhlia$2019', 
        },
    });
    let info = await transporter.sendMail({
        from: 'labriocheu@gmail.com', // sender address
        to: "dhairya@alahliagroup.com", // list of receivers
        subject: sub, // Subject line
        text: msg, // plain text body
        html: "<b> " + msg + "</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);

}

// main().catch(console.error)
module.exports = mailalert;