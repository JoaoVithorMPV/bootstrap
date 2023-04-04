//FIXED HEADER
window.onscroll = function () {
  if (window.scrollY > 80) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
};
