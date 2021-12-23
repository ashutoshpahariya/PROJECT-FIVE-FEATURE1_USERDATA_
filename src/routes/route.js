const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
//const productController = require('../controllers/productController')
//const reviewController = require('../controllers/reviewController')
const awsController = require('../controllers/awsController')
const myMiddleware = require('../middleWares/middleWare')

//-----------------FEATURE I - USER API
//-----------------FIRST API CREATE USER
router.post('/user', userController.userRegistration)
//-----------------SECOND API USER LOGIN
router.post('/userlogin', userController.userLogin)
//-----------------THIRD API GET USER DETAILS
router.get('/user/:userId',myMiddleware.getUserDetails,userController.getUserList)
//-----------------THIRD API UPDATE USER DETAILS
router.put('/user/:userId',myMiddleware.getUserDetails,userController.updateUserList)

//-----------------FEATURE II - PRODUCT API
//-----------------FIRST API CREATE PRODUCT
//router.post('/products',myMiddleware.getUserDetails,productController.createProduct)



//---------------------------GENERATE S3 URL----------------------------//
router.post('/write-file-aws',awsController.awsurl)

module.exports = router;



