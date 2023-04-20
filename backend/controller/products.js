const con = require('../db/mysql')


const getAllProducts = (req,res) =>{
    
    con.query('SELECT * FROM product;',(err,results)=>{
        if(err) throw err;
        res.status(201).send(results);
    })

    
}

const deleteProduct = (req,res) => {
    const productId = req.params.id;
    const sql = `START TRANSACTION;DELETE FROM wish_contains where prod_id=${productId} ;DELETE FROM inventory_store where prod_id=${productId} ;DELETE FROM cart_contains WHERE prod_id ='${productId}';DELETE FROM belongs_to WHERE prod_id = '${productId}';DELETE FROM product WHERE prod_id = '${productId}';COMMIT;`;
    con.query(sql,(err,results)=>{
        if(err) throw err;
        res.status(201).send("Deleted Successfully")
    })
}

module.exports = {getAllProducts,deleteProduct}