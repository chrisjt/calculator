$( document ).ready(function() {
    console.log( "ready!" );
});

var calcOutPrev = 0;
var calcOut = 0;
var btnClearClicked = false;
var operator = null;

// Function to change output on click.
function updateCalc() {
  console.log("updateCalc() called.")
  if(operator != true){
    switch(operator) {
      case "+":
        
        calcOut = calcOutPrev + calcOut;
        break;
    }
    operator = null;
  }
  $("#out").text(calcOut);

}
// Function to update output based on num input.
function enterNum(num) {
  if(calcOut == 0) {
    calcOut = num;
    updateCalc();
  }
  else {
    var temp = calcOut + num.toString();
    calcOut = parseFloat(temp);
    updateCalc();
  }
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

    calcUpdate();
    operator = "+"
  });
  $("#btnEqualsr").click(function() {
  });
  $(".btn-calc").click(function() {
    console.log(".btn-calc clicked.")
    var id = this.id;
    switch(id) {
      case "btnNine":
        console.log("Nine pressed.")
        enterNum(9);
        break;
      case "btnEight":
        console.log("Eight pressed.")
        enterNum(8);
        break;
      case "btnSeven":
        console.log("Seven pressed.")
        enterNum(7);
        break;
      case "btnSix":
        console.log("Six pressed.")
        enterNum(6);
        break;
      case "btnFive":
        console.log("Five pressed.")
        enterNum(5);
        break;
      case "btnFour":
        console.log("Four pressed.")
        enterNum(4);
        break;
      case "btnThree":
        console.log("Three pressed.")
        enterNum(3);
        break;
      case "btnTwo":
        console.log("Two pressed.")
        enterNum(2);
        break;
      case "btnOne":
        console.log("One pressed.")
        enterNum(1);
        break;
      case "btnZero":
        console.log("Zero pressed.")
        enterNum(0);
        break;
    }
  });
});
