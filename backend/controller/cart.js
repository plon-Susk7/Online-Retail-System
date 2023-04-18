const con = require('../db/mysql')


const addToCart = (req,res) =>{
    
    con.query('INSERT INTO Cart (cart_id, cust_id, total)VALUES (83, 83, 5);',(err,results)=>{
        if(err) throw err;
        res.status(201).send(results);
    })

    
}

module.exports = {addToCart}
