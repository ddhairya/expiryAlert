const mailalert = require("./mailalert")

const cron = require("node-cron")
cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
    // mailalert(sub = 'Notify', msg = 'hello');
});
