const express = require("express");

const router = express.Router();

router.get("/", (req,res)=>{
    res.render("login", {title : "로그인 페이지 구현"}  );  /*여기에 { title : ddd}처럼 변수 전달 가능.*/
})

module.exports = router; // 이걸 써줘야 export가 되서 app에서 require가 되겠지?