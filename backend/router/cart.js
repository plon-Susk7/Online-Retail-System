const express = require('express')
const router = express.Router();

const {addToCart,emptyCart,getCart} =require('../controller/cart')

router.post('/',addToCart)
router.delete('/delete',emptyCart)
router.get('/',getCart)

module.exports = router