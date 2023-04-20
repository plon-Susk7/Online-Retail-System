const con = require('../db/mysql')


const getOrders = (req,res) =>{
    
    con.query('select orders.order_id,user.username as customer,user.username as agent,orders.total,orders.address,orders.placed_date,orders.status from orders,user where orders.cust_id = user.user_id',(err,results)=>{
        if(err) throw err;
        res.status(201).send(results);
    })

    
}

const getOrdersAgent = (req,res) => {
    con.query(`select orders.order_id,user.username as customer,orders.total,orders.address,orders.placed_date,delivers.status from orders,delivers,user where orders.cust_id = user.user_id and orders.order_id=delivers.order_id and delivers.deliv_id = ${req.params.id}`,(err,results)=>{
        if(err) throw err;
        res.status(201).send(results)
    })
}

const changeOrderStatus = (req,res) =>{
    con.query(`START TRANSACTION;UPDATE delivers SET status=1 where order_id = ${req.params.id};COMMIT;`,(err,result)=>{
        if(err) throw err;
        res.status(201).send("Changes Successfully")
    })
}


module.exports = {getOrders,getOrdersAgent,changeOrderStatus}