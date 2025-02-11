let dataSet = JSON.parse(localStorage.getItem("userinfo")) || [];
const userinfo = JSON.parse(document.getElementById("userData").textContent);
let search = dataSet.filter((item) => {
  return item.userName === userinfo.user;
});
let main = document.getElementById("main");
main.innerHTML = "";
if (search.length > 0) {
  search.forEach((item) => {
    main.innerHTML += `
            <span>${item.email}</span>
            <span>${item.userName}</span>
            <span>${item.age}</span>
            <br>
        `;
  });
} else {
  main.innerHTML = "<p>저장된 회원 정보가 없습니다.</p>";
}
