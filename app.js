const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");

dotenv.config(); // 현재 디렉토리의 dotenv 파일을 환경변수로.
const pageRouter = require("./routes/page"); // 기본 root에 page를 연결.
const authRouter = require("./routes/auth"); 

const app = express();
const port = process.env.PORT || 8000;
app.set("view engine", "html");
nunjucks.configure('views', {  //views 폴더에 생기는 html 파일들을 랜더링의 기본으로.
    express : app,
    watch : true,
})


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    }
}))


app.use("/", pageRouter); // 메인 페이지. routes의 page에 들어 있는 로직에 따라 결정. 중간에 모든 것을 적어주면 더러워져서 따로 빼준 것임.
app.use("/auth", authRouter); // /auth로 연결되는 것들은 이 쪽으로 흐르도록 하라.


app.listen(port, ()=>{
    console.log(`Welcome to WatchPedia CloneServer. You are connected to port num.${port}`);
})