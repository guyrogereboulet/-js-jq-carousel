$(document).ready(
  function() {
    $(".prev").click(
      function () {
        clickNext();
      }
    );

    $(".next").click(
      function () {
        clickPrev();
      }
    );
  }
);




///////FUNCTIONS///////
function clickNext() {
  var imagActive = $("img.active");
  var imageNext = imagActive.next();

  if (imageActive.hasClass("last") == true) {
    imageActive.removeClass("active");
    $("img.first").addClass("active");
  } else {
    imageActive.removeClass("active");
    imageNext.addClass("active");
  }






}

function clickPrev() {
 alert("click prev");
}
