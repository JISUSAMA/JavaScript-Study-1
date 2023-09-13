function box_open1() {
  document.getElementById("title-name").innerHTML = "아이디 입력";
  document.getElementById("box1").style.display = "block";

  document.getElementById("Close").addEventListener("click", function () {
    document.getElementById("box1").style.display = "none";
  });
}
function box_open2() {
  document.getElementById("title-name").innerHTML = "비번 입력";
  document.getElementById("box1").style.display = "block";

  // 이벤트 리스너는 다양한 이벤트명이 있다. mouseover, scroll 등 다양함
  document.getElementById("Close").addEventListener("click", function () {
    document.getElementById("box1").style.display = "none";
  });
}
