const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");

const router = express.Router();

const dbConfig = require("../config/config.js");
const connection = mysql.createConnection(dbConfig);



router.post("/login", (req, res)=>{   //app.js에서 app.use("/auth", authrouter) 해주었기 때문에 다른것 없이 바로 "/login"으로 받을 수 있는 것.
    console.log("req.body 안에 들어있는 우리가 적은 id, pw",req.body);
    console.log("session id: ",req.sessionID);  // app.js의 session 정해준 값에 따라 만들어짐. req.session으로 확인가능. 크롬 탭마다 달라짐.
    const loginId = req.body.loginId;

    let sql = "SELECT * FROM user WHERE user_id = ?";
    connection.query(sql, [loginId],function(err, results, fields){
        if(err){
            console.error("mysql error",err);
        }else {
            if(results[0].user_id === loginId && results[0].user_password === req.body.password){  
                console.log("로그인 되셨습니다."); //핀테크 auth 참조해야겟당. 같으면 토큰 발행. 토큰 res.json으로 넘겨서 클라에서 session 저장
            } // 나중에 따로 파일 만들어서, 로그인이 필요한 작업들에 미들웨어로 그 파일을 넣어줄 거임. 그 파일은 토큰이 없다면! error띄우는 작업.
        } 
        
    });
    res.render("main");
})




module.exports = router;