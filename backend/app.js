const express  = require('express')
const connectDB = require('./db/mysql')
const getAllProducts = require('./router/products')
const getAllCategory = require('./router/category')
const getAllBrand = require('./router/brand')
const getAllOlaps = require('./router/olaps')
const signup = require('./router/signup')
const addToCart = require('./router/cart')
const login = require('./router/login')
const getAllCoupon = require('./router/coupon')
const checkout = require('./router/checkout')
const app = express()
const cors = require('cors');

// var con = connectDB();

// con.query('use myDB',(err,res)=>{
//   if(err) throw err;
//   //console.log(res)
// })

// con.query('select category.cat_name, COUNT(Product.prod_id) as product_count from Category left join product on Category.cat_id = Product.cat_id group by Category.cat_name;',(err,res)=>{
//   if(err) throw err;
//   console.log(res)
// })
app.use(cors())
app.use(express.static("./public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/getallproducts',getAllProducts)
app.use('/getallcategory',getAllCategory)
app.use('/getallbrand',getAllBrand)
app.use('/getallolaps',getAllOlaps)
app.use('/signup',signup)
app.use('/cart',addToCart)
app.use('/login',login)
app.use('/coupon',getAllCoupon) // This has all coupon related functionalities
app.use('/checkout',checkout)

const start = async() =>{
    
    try{
        app.listen(8000,console.log("Server is active..."))
    }catch(err){
        console.log(err)
    }
}

start()