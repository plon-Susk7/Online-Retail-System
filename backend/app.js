const express  = require('express')
const connectDB = require('./db/mysql')
const app = express()


var con = connectDB();

con.query('use myDB',(err,res)=>{
  if(err) throw err;
  //console.log(res)
})

con.query('select category.cat_name, COUNT(Product.prod_id) as product_count from Category left join product on Category.cat_id = Product.cat_id group by Category.cat_name;',(err,res)=>{
  if(err) throw err;
  console.log(res)
})

const start = async() =>{
    
    try{
        app.listen(8000,console.log("Server is active..."))
    }catch(err){
        console.log(err)
    }
}

start()