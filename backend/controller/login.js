const con = require('../db/mysql')


const login= (req,res) =>{
    
    console.log(req.body)

    con.query(`select * from user where user.username='${req.body.username}' and user.passw=${req.body.passw}`,(err,results)=>{
        if(err) throw err;
        res.send(results)
    })

}

module.exports = {login}
