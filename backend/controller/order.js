const con = require('../db/mysql')


const getOrders = (req,res) =>{
    
    con.query('select orders.order_id,user.username as customer,user.username as agent,orders.total,orders.address,orders.placed_date from orders,user where orders.cust_id = user.user_id',(err,results)=>{
        if(err) throw err;
        res.status(201).send(results);
    })

    
}


module.exports = {getOrders}
