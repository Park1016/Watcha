const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const dbConfig = require("../config/config.js");
const connection = mysql.createConnection(dbConfig);



router.post("/login", (req, res)=>{ 
    console.log(req.body);
    
    let sql = "SELECT * FROM user";
    connection.query(sql, function(err, results, fields){
        if(err){
            console.error("mysql error",err);
        }else {
            console.log(results);
        } 
        
    });
    res.send("login");
})




module.exports = router;