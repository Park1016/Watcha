const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const brcypt = require("bcrypt");
const mysql = require("mysql");
const dbConfig = require("../config/config.js");
const connection = mysql.createConnection(dbConfig);


const passportConfig = {usernameField : 'userid', passwordField : 'password'}; //해당 프로퍼티 이름으로 client가 server에 보내는 데이터 인식

const passportVerify = async (userid, password, done) => {
    try{
        let sql = "SELECT * FROM user WHERE user_id = ?";
        connection.query(sql, [userid], function(err, results, fields){
            
        })
    }catch(err){}
}

