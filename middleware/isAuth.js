const config = require('./../config');
const jwt = require('jsonwebtoken');

const mongoose = require('./../libs/mongoose');
const User = mongoose.model('User');

module.exports = (req,res,next) => {
    let token = req.query['access-token'];

    if(token) {
        jwt.verify(token, config.secret, function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;

                 return User.load({_id: decoded._doc._id})
                    .then((response) => {
                        return response ? next() : res.status(401).send('Unauthorized');
                    });
            }
        });
    } else {
        return res.status(401).send('User not found');
    }
};