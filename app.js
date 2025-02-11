const express = require("express");
const app = express();
const port = 3000;
//path 선언
const path = require("path");
//body-parser
// x-www.form-urlencoded 방식, 객체 형태로 결과가 나옴 {}
app.use(express.urlencoded({ extended: true }));
//json
app.use(express.json());
// js_css파일을 불러서 사용하기 위해 경로를 하나로 통합
app.use(express.static(path.join(__dirname, "js_css")));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("main");
});

// 회원정보 검색결과창으로 랜더
app.get("/getForm", (req, res) => {
  //get 요청은 req.query
  res.render("search", { title: "회원정보 검색 결과", userinfo: req.query });
});
// userinfo 선언
let userinfo = "";

//회원 리스트창 랜더
app.post("/postForm", (req, res) => {
  userinfo = req.body; // userinfo에 데이터 저장
  //post 요청은 req.body
  res.render("list", { title: "회원 list", userinfo: req.body });
});

app.get("/userinfo", (req, res) => {
  // userinfo 사용
  res.json(userinfo); // 클라이언트에게 JSON 형식으로 응답
});

app.get("/test2", (req, res) => {
  res.render("test2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
