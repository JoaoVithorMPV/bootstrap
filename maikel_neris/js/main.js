//FIXED HEADER
window.onscroll = function () {
  if (window.scrollY > 80) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
};

//ISOTOPE
let btns = $("servicos .butto-group button");
btns.click(function (e) {
  $("servicos .butto-group button").removeClass();
  e.target.classList.add("active");
});
