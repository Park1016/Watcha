const passport = require("passport");
const local = require("./localStrategy");
const User = require("../models/user");

module.exports = () => {  
    passport.serializeUser((user, done)=>{   //로그인 시 실행. req.session에 어떤 데이터를 저장할지 정함.
        done(null, user.id); // done(에러발생시에, 저장하고 싶은 데이터 (모두 저장하면 많으니 사용자의 id만 저장))
    });

    passport.deserializeUser((id, done)=>{   // 매 요청시 실행. passport.session이 호출. 위의 user.id가 매개변수로 들어옴. 
        User.findOne({where : id})
            .then(user => done(null, user))   //조회한 정보를 req.user에 저장.
            .catch(err => done(err)); 
    });

    local();
}