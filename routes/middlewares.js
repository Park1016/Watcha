exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()){  //passport는 req객체에 isAuthenticate()라는 매서드를 추가.
        next();
    } else {
        res.status(403).send("로그인이 필요");
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        next();
    } else {
        const message = encodeURIComponent('로그인한 상태입니다');
        res.redirect(`/?error=${message}`);
    }
};