const express = require('express')
const router = express.Router();

const {getOrders,getOrdersAgent,changeOrderStatus} =require('../controller/order')

router.get('/',getOrders)
router.get('/agent/:id',getOrdersAgent)
router.put('/:id',changeOrderStatus)

module.exports = router