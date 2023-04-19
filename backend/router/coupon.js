const express = require('express')
const router = express.Router();

const {getAllCoupon} =require('../controller/coupon')

router.post('/',getAllCoupon)

module.exports = router