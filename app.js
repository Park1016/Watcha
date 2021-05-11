const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
const passport = require("passport");
const { sequelize } = require('./models'); //db.sequelize

dotenv.config(); // 현재 디렉토리의 dotenv 파일을 환경변수로.
const pageRouter = require("./routes/page"); // 기본 root에 page를 연결.
const loginRouter = require("./routes/login");



const app = express();
const port = process.env.PORT || 8000;
app.set("view engine", "html");
nunjucks.configure('views', {  //views 폴더에 생기는 html 파일들을 랜더링의 기본으로.
    express : app,
    watch : true,
})
sequelize.sync({force : true}) // 서버 실행 시마다 테이브을 재생성. 그대로 쓰고 싶으면 false로.
    .then(()=>{
        console.log("데이터베이스 연결.");
    }).catch((err)=>{
        console.error(err);
    })


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({  //express-session은 req.headers.cookie에 주어진 sid를 sessionID로 번역하고 그 sessionID에 해당하는 session값을 req.session에 저장한다.
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    }
}))
app.use(passport.initialize());
app.use(passport.session());


app.use("/", pageRouter); // 메인 페이지. routes의 page에 들어 있는 로직에 따라 결정. 중간에 모든 것을 적어주면 더러워져서 따로 빼준 것임.
app.post("/login", loginRouter); // /auth로 연결되는 것들은 이 쪽으로 흐르도록 하라. 


app.listen(port, ()=>{
    console.log(`Welcome to WatchPedia CloneServer. You are connected to port num.${port}`);
})