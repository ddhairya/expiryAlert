const nodemailer = require("nodemailer");
var moment = require('moment')
const today = moment()

async function mailalert(sub, msg){
    // console.log(sub)
    // create reusable transporter object using the default SMTP transport
    // { 
    //     host: 'smtp.office365.com',
    //     port: '587',
    //     auth: { user: 'xxxx', pass: 'xxxx' },
    //     secureConnection: false,
    //     tls: { ciphers: 'SSLv3' }
    // }

    // let transporter = nodemailer.createTransport({
    //     service : 'gmail',
    //     auth: {
    //     user: 'labriocheu@gmail.com', 
    //     pass: 'AlAhlia$2019', 
    //     },
    // });

    let transporter = nodemailer.createTransport({

        host: '192.168.1.17',
        port: '25',
        auth: { user: '', pass: '' },
        secureConnection: false,
        tls: { ciphers: 'SSLv3' }

    });

    // console.log(msg)
    let body = `Title - ${msg.title} , ${msg.company} - ${msg.location} , required your attention. Expiray Date - ${msg.expiryDate}.
                Click on the below link to update the details. http://172.17.7.5:3000/items/${msg.id} `

    let info = await transporter.sendMail({
        // from: 'labriocheu@gmail.com', // sender address
        from: 'it@alahliagroup.com', // sender address
        to: "dhairya@alahliagroup.com", // list of receivers
        subject: sub, // Subject line
        text: body, // plain text body
        html: 
            ` 
                <b> Title -  ${msg.title} </b>
                <div> <b> ${msg.company} - ${msg.location} , </b> required your attention. </div> 
                <div> Expiray Date - <b> ${msg.expiryDate} </b> </div>
                Click on the below link to update the details. http://172.17.7.5:3000/items/${msg.id}       
            ` 
    })
    console.log(today)
    console.log("Message sent: %s", info.messageId);

}

// main().catch(console.error)
module.exports = mailalert;