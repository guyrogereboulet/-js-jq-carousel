$(document).ready(
  function() {
    $(".prev").click(
      function () {
        clickPrev();
      }
    );

    $(".next").click(
      function () {
        clickNext();
      }
    );
  }
);




///////FUNCTIONS///////
function clickNext() {
  //Images//
  var imageActive = $("img.active");
  var imageNext = imageActive.next();

  //Circles//
  var circleActive = $("i.active");
  var circleNext = circleActive.next();

  if (imageActive.hasClass("last") == true) {
    imageActive.removeClass("active");
    $("img.first").addClass("active");
    circleActive.removeClass("active");
    $("i.first").addClass("active");
  } else {
    imageActive.removeClass("active");
    imageNext.addClass("active");
    circleActive.removeClass("active");
    circleNext.addClass("active");
  }

}

function clickPrev() {
  //Images//
  var imageActive = $("img.active");
  var imagePrev = imageActive.prev();

  //Circles//
  var circleActive = $("i.active");
  var circlePrev = circleActive.prev();

  if (imageActive.hasClass("first") == true) {
   imageActive.removeClass("active");
   $("img.last").addClass("active");
   circleActive.removeClass("active");
   $("i.last").addClass("active");
 } else {
   imageActive.removeClass("active");
   imagePrev.addClass("active");
   circleActive.removeClass("active");
   circlePrev.addClass("active");
 }
}
