// 서버로부터 데이터를 비동기적으로 가져옵니다.
// 서버에 요청을 보냄 userinfo의 데이터 가져오기
fetch("/userinfo")
  .then((response) => response.json()) // JSON 형식으로 응답 받기
  .then((userinfo) => {
    let userinfo1 = userinfo;
    let dataSet = JSON.parse(localStorage.getItem("userinfo")) || [];
    dataSet.push(userinfo1);
    localStorage.setItem("userinfo", JSON.stringify(dataSet));
    updateTable(dataSet); // 데이터셋을 이용하여 테이블을 갱신
  })
  .catch((error) => console.error("Error:", error));

// localStorage에서 데이터를 가져와서 테이블을 생성하는 함수
function updateTable(dataSet) {
  let main = document.getElementById("main");
  main.innerHTML = ""; // 기존 내용 삭제 (새로고침을 위해)

  if (dataSet.length > 0) {
    dataSet.forEach((item) => {
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
}
