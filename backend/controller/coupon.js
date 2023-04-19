const con = require('../db/mysql')


const getAllCoupon = (req,res) =>{
    
    con.query(`select * from has_coupon natural join coupon where cust_id=${req.body.user_id}`,(err,results)=>{
        if(err) throw err;
        res.status(201).send(results);
    })

    
}


module.exports = {getAllCoupon}
