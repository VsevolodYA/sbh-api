const schedule = require('node-schedule');
const PaymentTime = require('../jobs/PaymentTime');

class Scheduler {

    static run() {
        return schedule.scheduleJob({hour: 1, minute: 30}, () => {
            return PaymentTime.payment();
        });
    }

}

module.exports = Scheduler;