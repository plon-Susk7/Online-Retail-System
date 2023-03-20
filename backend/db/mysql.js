var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin"
});

var connectDB = ()=>{
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    return con;
} 


module.exports = connectDB