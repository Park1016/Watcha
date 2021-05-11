const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const passport = require("passport");

const router = express.Router();

//const dbConfig = require("../config/config.js");
//const connection = mysql.createConnection(dbConfig);


/*로그인 post*/
router.post("/login", (req, res)=>{   //app.js에서 app.use("/auth", authrouter) 해주었기 때문에 다른것 없이 바로 "/login"으로 받을 수 있는 것.
    console.log("req.body 안에 들어있는 우리가 적은 id, pw",req.body);
    console.log("session id: ",req.sessionID);  // app.js의 session 정해준 값에 따라 만들어짐. req.session으로 확인가능. 크롬 탭마다 달라짐.
    const loginId = req.body.loginId;
    



});


module.exports = router; // 이걸 써줘야 export가 되서 app에서 require가 되겠지?








/*  express auth 방식에 대한 설명
https://velog.io/@jakeseo_me/%EB%B2%88%EC%97%AD-passport-local%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%98%EB%8A%94-%EB%AA%A8%EB%93%A0-%EA%B2%83
*/