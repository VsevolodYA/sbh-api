const express = require('express');
const router = express.Router();

//Validators
let signinValid = require('../middleware/validation/signinValid');
let signupValid = require('../middleware/validation/signupValid');
let productValid = require('../middleware/validation/productValid');

//Middleware
const isAdmin = require('../middleware/isAdmin');
const isAuth = require('../middleware/isAuth');

//Controllers
let authController = require('../controllers/authController');
let couponController = require('../controllers/couponController');
let productController = require('../controllers/productController');
let financialTrackerController = require('../controllers/financialTrackerController');

const runAction =  (action, req, res) => {
    action(req, res)
        .then( (data) => {
            console.log("Data : " + data);
            res.status(200).send(data);
            return;
        })
        .catch((err) => {
            console.log('Router: ' + err);
            res.status(err.status || 400).send(err);
            return;
        });
};

//Admin
router.get('/auth/',  isAuth, (req, res) => runAction(authController.authToken, req, res));
router.post('/auth', signinValid, (req,res) => runAction(authController.signinAdmin,req,res));

//Manage Products
router.post('/products',isAuth, isAdmin, productValid, (req, res) => runAction(productController.create, req, res));
router.get('/products',isAuth, isAdmin, (req, res) => runAction(productController.getProducts, req, res));
router.get('/products/:id',isAuth, isAdmin, (req, res) => runAction(productController.getProduct, req, res));
router.put('/products/:id',isAuth, isAdmin, (req, res) => runAction(productController.updateProduct, req, res));
router.post('/products/:id',isAuth, isAdmin, (req, res) => runAction(productController.deleteProduct, req, res));
router.get('/plans',isAuth, isAdmin, (req,res) => runAction(productController.getPlans, req, res));

//Manage Coupons
router.post('/coupon',isAuth, isAdmin, (req,res) => runAction(couponController.create, req,res));
router.get('/coupon',isAuth, isAdmin, (req,res) => runAction(couponController.getCoupons, req,res));
router.get('/coupon/:id',isAuth, isAdmin, (req,res) => runAction(couponController.getCoupon, req,res));
router.put('/coupon/:id',isAuth, isAdmin, (req, res) => runAction(couponController.update, req, res));
router.delete('/coupon',isAuth, isAdmin, (req,res) => runAction(couponController.remove,req,res));

//Reports Financial Tracker
router.get('/financialTracker',isAuth, isAdmin, (req,res) => runAction(financialTrackerController.getPayments,req,res));


module.exports = router;