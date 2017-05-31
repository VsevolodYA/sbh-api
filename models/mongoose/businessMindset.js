const mongoose = require('./../../libs/mongoose');

let Schema = mongoose.Schema;

const Mindset = require('./class/Mindset');

let schema = new Schema({
    userId: {
        type: String
    },
    yourCommitment: {
        type: Array
    },
    areYourStuck: {
        type: Array
    },
    privilegeAndResponsibility: {
        type: Object
    },
    businessStartDate: {
        type: Object
    }
});

schema.loadClass(Mindset);

module.exports = mongoose.model('businessMindset', schema);