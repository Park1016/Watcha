const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const User = require("../models/user");

const router = express.Router();

router.post("/join", isNotLoggedIn, async(req, res, next)=>{
    console.log(req.body);
    const { email, password } = req.body;
    try{
        const exUser = await User.findOne({where : {email}});
        if(exUser){
            return res.redirect("/join?error=exist");
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email, 
            password : hash,
        });
        return res.redirect("/");
    }catch(error){
        console.error(error);
        return next(error);
    }
});

router.post('/login' ,isNotLoggedIn, (req, res, next)=>{
    passport.authenticate('local', (authError, user, info)=>{
        if(authError){
            console.error(`authError: ${authError}`);
            return next(authError);
        }
        if(!user){
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user, (loginError)=>{
            if(loginError){
                console.error(`loginError : ${loginError}`);
                return next(loginError);
            }
            return res.redirect("/");
        });
    })(req, res, next); // 미들웨어 내의 미들웨어는 (req, res, next)를 붙여줌
});


router.get("/logout", isLoggedIn, (req, res)=>{
    req.logout();
    req.session.destroy();
    res.redirect("/");
});



module.exports = router;





/*  express auth 방식에 대한 설명
https://velog.io/@jakeseo_me/%EB%B2%88%EC%97%AD-passport-local%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%98%EB%8A%94-%EB%AA%A8%EB%93%A0-%EA%B2%83
*/