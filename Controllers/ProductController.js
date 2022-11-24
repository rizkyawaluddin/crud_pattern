var ProductService = require('../Services/ProductService');

async function productController(req, res) {
	try {
		const addProduct = await ProductService.createProduct(req)
		return res.send({
			'data' : 'data tersimpan luuurr',
			'message' : 'Alhamdulillah',
			'datalagi' : addProduct,
		})
	} catch (error) {
		console.log(error);
		res.send ({
			'data':'not Found',
			'message':'server error'
		})
	}
}

async function getProductsController(req,res)  {
    try{
        const responseProduct = await ProductService.getAllProducts();

        return res.send({
            'message' : 'Success',
            'data' : responseProduct,
            'status' :200
        })

    }catch(error){
        console.log(error)
        res.send({
            status: 'failed',
            message: 'server error'
        })
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