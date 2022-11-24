/*** 
### Experiments - Done
- Highly structured code

###Experiments - Todo 
- Ref : https://github.com/expressjs/express/blob/4.13.1/examples/route-map/index.js#L52-L66

*/

/**
*** Basic Modules
**/
var express = require('express');
var router = express.Router();

/**
*** Controllers
**/
var UserController = require('../Controllers/UserController');
var ProductController = require('../Controllers/ProductController');
// var CategoryController = require('../Controllers/CategoryController')

/**
*** Routes
**/

// router.use(AuthController.authMiddleware)//router auth middleware

router.all('/', function(req, res, next) {
  res.json({'success':true, message:'Welcome to Xpress'});
});

router.all('/list', function(req, res, next) {
  res.json({'success':true, 'message':router.stack});
});

router.post('/user/post', UserController.userController);
router.get('/users', UserController.getUsersController);
// router.get('/user/:id', UserController.getUserController);

router.post('/product/post', ProductController.productController);
router.get('/products', ProductController.getProductsController);
router.patch('/product/:id', ProductController.updateProductController);

// router.post('/category/post', CategoryController.categoryController);


module.exports = router;
