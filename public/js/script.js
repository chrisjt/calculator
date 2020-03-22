$( document ).ready(function() {
    console.log( "ready!" );
});

var calcOutPrev = 0;
var calcOut = 1;
var btnOutClicked = false;

// Function to change output on click.
function updateCalc() {
  console.log("updateCalc() called.")
  $("#out").text(calcOut);
}

$("#btnClear").click(function() {
  console.log("btnClear clicked.")
  calcOut = 0;
  if(btnOutClicked == false) {

  }
  updateCalc();
});
