var caller = $("#emcee"),
  box = $("#box");

function is_touch_device3() {
  return !!("ontouchstart" in window || navigator.maxTouchPoints);
}

function foo() {
  var randX = Math.floor(Math.random() * (window.innerWidth - 100));
  var randY = Math.floor(Math.random() * (window.innerHeight - 100));
  console.log([randX, randY]);
  caller.stop().animate({ left: randX + "px", top: randY + "px" });
}

$(document).ready(function () {
  if (is_touch_device3()) {
    alert("Please play the game without touching the screen.");
  }
  caller.on("mouseenter", foo);
  caller.on("click", function () {
    alert("Congratulations! You Won");
  });
});
