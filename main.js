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
  var imageActive = $("img.active");
  var imageNext = imageActive.next();

  if (imageActive.hasClass("last") == true) {
    imageActive.removeClass("active");
    $("img.first").addClass("active");
  } else {
    imageActive.removeClass("active");
    imageNext.addClass("active");
  }

}

function clickPrev() {

}
