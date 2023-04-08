//FIXED HEADER
window.onscroll = function () {
  if (window.scrollY > 80) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
};

//ISOTOPE
let btns = $("#servicos .button-group button");
btns.click(function (e) {
  $("#servicos .button-group button").removeClass();
  e.target.classList.add("active");

  let selector = $(e.target).attr("data-filter");
  $("#servicos .grid").isotope({
    filter: selector,
  });
});
