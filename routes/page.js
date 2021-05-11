const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const passport = require("passport");

const router = express.Router();



/*메인페이지*/ 
router.get("/", (req,res)=>{
    res.render("main", {title : "메인 페이지 구현"}  );  /*여기에 { title : ddd}처럼 변수 전달 가능.*/
})

/* 로그인 페이지*/
router.get("/login", (req, res)=>{
    res.render("login", {title : "로그인 페이지 구현"});
})

module.exports = router; // 이걸 써줘야 export가 되서 app에서 require가 되겠지?

