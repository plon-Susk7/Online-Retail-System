const express = require('express')
const router = express.Router();

const {getAllProducts,deleteProduct} =require('../controller/products')

router.get('/',getAllProducts)
router.delete('/:id',deleteProduct)

module.exports = router