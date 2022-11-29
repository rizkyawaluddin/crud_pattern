var ProductService = require('../Services/ProductService');
const response = require('../response');

async function productController(req, res) {
	try {
		const addProduct = await ProductService.createProduct(req)
        console.log('addProduct')
        console.log(addProduct)
		if (addProduct == null){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Product', addProduct);
        }
	} catch (error) {
		console.log(error);
        return response(res, 400, false ,'Failed Send Request To Profile')
	}
}

async function getProductsController(req,res)  {
    try{
        const responseProduct = await ProductService.getAllProducts();
        if (responseProduct == null){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Product', responseProduct);
        }

    }catch(error){
        console.log(error)
        return response(res, 400, false ,'Failed Send Request To Product')
    }
}

async function updateProductController(req, res) {
    try {
        const responseUpdate = await ProductService.updateProduct(req)

        return res.send ({
            'data' : responseUpdate,body,
            'message' : 'Success',
            'dataresponse' : responseUpdate,
            'status' :200
        })
    } catch (error) {
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
}

module.exports.productController = productController;
module.exports.getProductsController = getProductsController;
module.exports.updateProductController = updateProductController;