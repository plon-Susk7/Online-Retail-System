const express = require('express')
const router = express.Router();

const {getOrders} =require('../controller/order')

router.get('/',getOrders)

module.exports = router