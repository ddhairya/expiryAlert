const mailalert = require("./mailalert")
const jsonData = require('./model/item.json');
var moment = require('moment')

const today = moment()
const cron = require("node-cron")
// cron.schedule('* * * * *', () => {
cron.schedule('26 10 * * *', () => {
    // console.log('running a task every minute');
    // loop though data
    // if expdate - today < 0 -> mail()
    // elif expdate - today <= {alert} and >= 0
    // if Number.isInteger(expdate - today/ {freq}) -> mail()
    // mailalert(sub = 'Notify', msg = 'hello');

    jsonData.items.map((item) => {
        const expDate = moment(item.expiryDate, 'DD-MM-YYYY')
        const duration = expDate.diff(today, 'days')
        // console.log(duration)
        if(item.alert == 0){
            console.log("ByPassed" + item)
        }
        else if(duration < 0){
            // console.log("Negative Mail")
            item.status = "Expired"
            mailalert(sub = "Expired -" + item.title, msg = item)
        }
        else if(duration <= item.alert && duration >=0 ){
            // console.log("send mail")
            item.status = "Notify"
            if (Number.isInteger(duration/item.frequency)){
                mailalert(sub = "Notify -"+ item.title, msg = item)
            }
        }else{
            console.log("There are no alerts.")
        }

    })
    // console.log(jsonData)
    

});
