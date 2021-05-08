const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");

const router = express.Router();

const dbConfig = require("../config/config.js");
const connection = mysql.createConnection(dbConfig);

/*메인페이지 = 로그인페이지*/ 
router.get("/", (req,res)=>{
    res.render("login", {title : "로그인 페이지 구현"}  );  /*여기에 { title : ddd}처럼 변수 전달 가능.*/
})

/*로그인 post*/
router.post("/login", (req, res)=>{   //app.js에서 app.use("/auth", authrouter) 해주었기 때문에 다른것 없이 바로 "/login"으로 받을 수 있는 것.
    console.log("req.body 안에 들어있는 우리가 적은 id, pw",req.body);
    console.log("session id: ",req.sessionID);  // app.js의 session 정해준 값에 따라 만들어짐. req.session으로 확인가능. 크롬 탭마다 달라짐.
    const loginId = req.body.loginId;
    

    let sql = "SELECT * FROM user WHERE user_id = ?";
    connection.query(sql, [loginId],function(err, results, fields){
        if(err){
            console.error("mysql error",err);
        } 
        if(results.length){ //results에 값이 있어야지만.
            if(results[0].user_id === loginId && results[0].user_password === req.body.password){  
                const token = jwt.sign({
                    user_id : req.body.loginId,
                    user_password : req.body.password, /* 이거 이렇게 plain text하게 바로 pwd 담으면 안 됨. 암호화하는 방법 찾아보기.!!*/////////////////////////
                }, process.env.COOKIE_SECRET);
                //console.log(token);
                console.log("로그인 되셨습니다."); 
                res.render("main", {token : token}); //login.html로 데이터 넘겨짐?? 이거 확인 좀.////////
            } 
        } else {
            console.log("없는 아이디입니다."); /* 이거 나중에 클라에서도 alert 시켜주여여 함. */////////////////////////
            res.render("login", {title : "로그인 페이지 구현"} ); 
        }
    });
    //res.render("main");
})
//핀테크 auth 참조해야겟당. 같으면 토큰 발행. 토큰 res.json으로 넘겨서 클라에서 session 저장
// 나중에 따로 파일 만들어서, 로그인이 필요한 작업들에 미들웨어로 그 파일을 넣어줄 거임. 그 파일은 토큰이 없다면! error띄우는 작업.

module.exports = router; // 이걸 써줘야 export가 되서 app에서 require가 되겠지?