var button = $(".tab-button");
var content = $(".tab-content");
// $(button)
//   .eq(0)
//   .on("click", function () {
//     $(button).removeClass("orange");
//     $(button).eq(0).addClass("orange");
//     $(content).removeClass("show");
//     $(content).eq(0).addClass("show");
//   });

// $(".tab-button")
//   .eq(1)
//   .on("click", function () {
//     $(button).removeClass("orange");
//     $(button).eq(1).addClass("orange");
//     $(content).removeClass("show");
//     $(content).eq(1).addClass("show");
//   });

// $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     $(button).removeClass("orange");
//     $(button).eq(2).addClass("orange");
//     $(content).removeClass("show");
//     $(content).eq(2).addClass("show");
//   });

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
