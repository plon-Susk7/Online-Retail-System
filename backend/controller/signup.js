const con = require('../db/mysql')


const signup = (req,res) =>{
    
    console.log(req.body)

    con.query(`Insert into user(fname,mname,lname,username,passw) values ('${req.body.fname}','${req.body.mname}','${req.body.lname}','${req.body.username}','${req.body.passw}');`,(err,results)=>{
        if(err) throw err;
        console.log(results)
    })

    
    con.query(`insert into customers(cust_id,r_ole,phone_numb,address) values (113,'customer',${req.body.phone_numb},'${req.body.address}')`,(err,results)=>{
        if(err) throw err;
        console.log(results)
    })
    

    
}

module.exports = {signup}
