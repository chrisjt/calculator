$( document ).ready(function() {
    console.log( "ready!" );
});

var calcOutPrev = 0;
var calcOutOperator = 0;
var calcOut = 0;
var btnClearStatusAC = false;
var operator = null;
var operatorApplies = false;
var equalsHasHappened = false;

// Function to change output.
function updateCalc() {
  $("#out").text(calcOut);
}
// Function to update output based on num input.
function enterNum(num) {
  console.log("\n");
  console.log("enterNum() is called: " + num);
  if(operatorApplies == true) {
    console.log("operatorApplies is true");
    console.log("calcOut: " + calcOut);
    console.log("calcOutPrev: " + calcOutPrev);
    console.log("calcOutOperator: " + calcOutOperator);
    calcOutPrev = calcOut;
    calcOut = 0;
    clearOperators();
    operatorApplies = false;
  }
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
// Function to update output based on operator.
function applyOperator() {
  console.log("\n");
  console.log("applyOperator() is called.");
  if(operatorApplies == false && operator != null){
    console.log("operatorApplies is false.");
    console.log("calcOut: " + calcOut);
    console.log("calcOutPrev: " + calcOutPrev);
    console.log("calcOutOperator: " + calcOutOperator);    calcOutOperator = calcOut;
    switch(operator) {
      case "+":
        calcOut = calcOutPrev + calcOut;
        break;
      case "-":
        calcOut = calcOutPrev - calcOut;
        break;
    }
    if(operator != null) {
      equalsHasHappened = true;
    }

  }
  updateCalc();
}
// Function to update output based on existing operator.
function applyEquals() {
  console.log("\n");
  console.log("applyEquals() is called.");
  if(equalsHasHappened == false) {
    console.log("equalsHasHappened is false.");
    applyOperator();
  }
  else {
    console.log("equalsHasHappened is true.");
    console.log("calcOut: " + calcOut);
    console.log("calcOutPrev" + calcOutPrev);
    console.log("calcOutOperator: " + calcOutOperator);
    switch(operator) {
      case "+":
        calcOut = calcOut + calcOutOperator;
        break;
      case "-":
        calcOut = calcOut - calcOutOperator;
        break;
    }
    updateCalc();
  }
}
// Clear operators
function clearOperators() {
  $("#btnPlus").css("opacity", "1");
  $("#btnMinus").css("opacity", "1");
  operator = null;
}
// Click functions.
$(document).ready(function(){
  $("#btnClear").click(function() {
    console.log("btnClear clicked.")
    operator = null;
    operatorApplies = false;
    calcOut = 0;
    if(btnClearStatusAC == false) {

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
    clearOperators();
    $("#btnMinus").css("opacity", "0.6");
    applyOperator();
    operator = "-";
    operatorApplies = true;
  });
  $("#btnPlus").click(function() {
    clearOperators();
    $("#btnPlus").css("opacity", "0.6");
    applyOperator();
    operator = "+";
    operatorApplies = true;
  });
  $("#btnEquals").click(function() {
    applyEquals();
  });
  $(".btn-calc").click(function() {
    var id = this.id;
    switch(id) {
      case "btnNine":
        enterNum(9);
        break;
      case "btnEight":
        enterNum(8);
        break;
      case "btnSeven":
        enterNum(7);
        break;
      case "btnSix":
        enterNum(6);
        break;
      case "btnFive":
        enterNum(5);
        break;
      case "btnFour":
        enterNum(4);
        break;
      case "btnThree":
        enterNum(3);
        break;
      case "btnTwo":
        enterNum(2);
        break;
      case "btnOne":
        enterNum(1);
        break;
      case "btnZero":
        enterNum(0);
        break;
    }
  });
});
