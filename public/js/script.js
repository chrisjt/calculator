$( document ).ready(function() {
    console.log( "ready!" );
});

var calcOutPrev = 0;
var calcOut = 0;
var btnClearClicked = false;

// Function to change output on click.
function updateCalc() {
  console.log("updateCalc() called.")
  $("#out").text(calcOut);
}
// Click functions.
$(document).ready(function(){
  $("#btnClear").click(function() {
    console.log("btnClear clicked.")
    calcOut = 0;
    if(btnClearClicked == false) {

    }
    updateCalc();
  });
  $("#btnPolarity").click(function() {
  });
  $("#btnPercent").click(function() {
  });
  $("#btnDivide").click(function() {
  });
  $("#btnMulti").click(function() {
  });
  $("#btnMinus").click(function() {
  });
  $("#btnPlus").click(function() {
  });
  $("#btnEqualsr").click(function() {
  });
  $(".btn-calc").click(function() {
    console.log(".btn-calc clicked.")
    var id = this.id;
    switch(id) {
      case "btnNine":
        console.log("Nine pressed.")
        calcOut = 9;
        updateCalc();
        break;
      case "btnEight":
        console.log("Eight pressed.")
        calcOut = 8;
        updateCalc();
        break;
      case "btnSeven":
        console.log("Seven pressed.")
        calcOut = 7;
        updateCalc();
        break;
      case "btnSix":
        console.log("Six pressed.")
        calcOut = 6;
        updateCalc();
        break;
      case "btnFive":
        console.log("Five pressed.")
        calcOut = 5;
        updateCalc();
        break;
      case "btnFour":
        console.log("Four pressed.")
        calcOut = 4;
        updateCalc();
        break;
      case "btnThree":
        console.log("Three pressed.")
        calcOut = 3;
        updateCalc();
        break;
      case "btnTwo":
        console.log("Two pressed.")
        calcOut = 2;
        updateCalc();
        break;
      case "btnOne":
        console.log("One pressed.")
        calcOut = 1;
        updateCalc();
        break;
      case "btnZero":
        console.log("Zero pressed.")
        calcOut = 0;
        updateCalc();
        break;
    }
  });
});
