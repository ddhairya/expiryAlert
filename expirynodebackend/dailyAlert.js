const mailalert = require("./mailalert")
const jsonData = require('./model/item.json');
var moment = require('moment')

const today = moment()
const cron = require("node-cron")
// cron.schedule('* * * * *', () => {
cron.schedule('0 8 * * *', () => {
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
            // console.log("Expired Mail Section")
            item.status = "Expired"
            mailalert(sub = "Expired -" + item.title, msg = item)
        }
        else if(duration <= item.alert && duration >=0 ){
            //console.log("Notify mail section")
            //console.log(duration/item.frequency)
            item.status = "Notify"
            if (duration%item.frequency == 0){
                // console.log("notify mail")
                mailalert(sub = "Notify -"+ item.title, msg = item)
            }
        }else{
            console.log(today)
            console.log("There are no alerts.")
        }

    })
    // console.log(jsonData)
    

});
