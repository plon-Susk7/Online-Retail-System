const con = require('../db/mysql')


const getAllProducts = (req,res) =>{
    
    con.query('SELECT * FROM product;',(err,results)=>{
        if(err) throw err;
        res.status(201).send(results);
    })

    
}

module.exports = {getAllProducts}