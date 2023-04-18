const con = require('../db/mysql')


const addToCart = (req,res) =>{
    
    con.query(`INSERT INTO cart_contains(cart_id, cust_id, prod_id) VALUES (83,83,${req.body.id})`,(err,results)=>{
        if(err) throw err;
        res.status(201).send(results);
    })

    
}

const emptyCart = (req,res) => {
    con.query(`delete from cart_contains where cart_id = 83;`,(err,results)=>{
        if(err) throw err;
        res.status(201).send(results);
    })
}

const getCart = (req,res) => {
    con.query(`select prod_name,prod_desc,price from cart_contains,product where cart_contains.prod_id = product.prod_id and cust_id = 83`,(err,results)=>{
        if(err) throw err;
        res.status(201).send(results)
    })
}

module.exports = {addToCart,emptyCart,getCart}
