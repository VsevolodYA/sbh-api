const mongoose = require('./../libs/mongoose');
const BusinessMindset = mongoose.model('businessMindset');
const User = mongoose.model('User');

class MindsetController {
    
    static getAllMindset(req) {
        return BusinessMindset.load({userId: req.decoded._doc._id});
    }

    static setYourCommitment(req) {
        let finishedSteps = req.body.finishedSteps;
        
        return BusinessMindset.UpdateOrCreate({userId: req.decoded._doc._id, yourCommitment: req.body.data})
            .then(() => {
                return User.UpdateOrCreate({userId: req.decoded._doc._id, finishedSteps: finishedSteps});
            });
    }

    static setAreYouStuck(req) {
        
        let finishedSteps = req.body.finishedSteps;

        return BusinessMindset.UpdateOrCreate({userId: req.decoded._doc._id, areYourStuck: req.body.data})
            .then(() => {
                return User.UpdateOrCreate({userId: req.decoded._doc._id, finishedSteps: finishedSteps});
            });
    }
    
    static setPrivilegeAndResponsibility(req) {
        let finishedSteps = req.body.finishedSteps;

        return BusinessMindset.UpdateOrCreate({userId: req.decoded._doc._id, privilegeAndResponsibility:req.body.data})
            .then(() => {
                return User.UpdateOrCreate({userId: req.decoded._doc._id, finishedSteps: finishedSteps});
            });
    }
    
    static setStartDate(req) {
        let finishedSteps = req.body.finishedSteps;

        return BusinessMindset.UpdateOrCreate({userId: req.decoded._doc._id, businessStartDate:req.body.data})
            .then(() => {
                return User.UpdateOrCreate({userId: req.decoded._doc._id, finishedSteps: finishedSteps});
            });
    }
}

module.exports = MindsetController;