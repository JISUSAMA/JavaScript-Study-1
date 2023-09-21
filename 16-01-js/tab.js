var button = $(".tab-button");
var content = $(".tab-content");
$(button)
  .eq(0)
  .on("click", function () {
    $(button).removeClass("orange");
    $(button).eq(0).addClass("orange");
    $(content).removeClass("show");
    $(content).eq(0).addClass("show");
  });

$(".tab-button")
  .eq(1)
  .on("click", function () {
    $(button).removeClass("orange");
    $(button).eq(1).addClass("orange");
    $(content).removeClass("show");
    $(content).eq(1).addClass("show");
  });

$(".tab-button")
  .eq(2)
  .on("click", function () {
    $(button).removeClass("orange");
    $(button).eq(2).addClass("orange");
    $(content).removeClass("show");
    $(content).eq(2).addClass("show");
  });

function button_click() {
  for (let i = 0; i < 3; i++) {
    $(button)
      .eq(i)
      .on("click", function () {
        tap_open(i);
      });
  }
}
function tap_open(e) {
  $(button).removeClass("orange");
  $(button).eq(e).addClass("orange");
  $(content).removeClass("show");
  $(content).eq(e).addClass("show");
}
$(".list").click(function (e) {
  tap_open(e.target.dataset.id);
  console.log(e.target.dataset.id);
});

// var car = "소나타";
// var carPrice = 50000;
// var carColor = "white";
var car1 = ["소나타", 50000, ["white"]];
car1[0] = "밴츠"; //자료 수정하는 방법
car1.sort(); //정렬가능
car1.slice(1, 3); //자르기 가능

//object
// var car2 = { name: "소나타", value: 50000, color: "white" };
// console.log(car2["name"]); //'소나타'
// console.log(car2.name); //'소나타'
// car2.value = 60000; //값 수정가능
//////////////////////////////////////////
// document.querySelector(".product-name").innerHTML = car2.name;
// document.querySelector(".product-price").innerHTML = car2.value;
// document.querySelector(".product-name").innerHTML = car2["name"];
// document.querySelector(".product-price").innerHTML = car2["value"];

// var car2 = { name: "소나타", value: [50000, 3300, 1000], color: "white" };
// document.querySelector(".product-price").innerHTML = car2.value[2];
