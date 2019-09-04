export function convertNumber(numberInput) {
  var numberArray = [
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I']
  ];

  var output = '';

  var numCheck = isNumber(numberInput);
  if (numberInput > 3999 && numCheck) {
    output = "Please enter a number less than 3,999";
  } else {
    numberInput = convertToInt(numberInput);

    output = getExact(numberArray, numberInput);

    if(output === "") {
      output = makeRomanNumeral(numberArray, numberInput);
    }
  }
  return output;
}

export function makeRomanNumeral(romanArray, num){
  var output = "";
  for (var count = 0; count < romanArray.length; count++) {
    var symbolValue = romanArray[count][0];
    if (num - symbolValue >= 0) {  // check if symbol should be used immediately
      while (num - symbolValue >= 0) { // allow repeating symbols
        output += romanArray[count][1];
        num -= symbolValue;
      }
    }
    if (count < 6) { // enables subtraction notations, not needed for I numeral
      var newSymbol = romanArray[count + 1][1];
      var nextSymbolValue = romanArray[count + 1][0];
      if (nextSymbolValue.toString()[0] === "5") { // skip 5--- numerals
        newSymbol = romanArray[count + 2][1];
        nextSymbolValue = romanArray[count + 2][0];
      }
      if (num / nextSymbolValue > 3 && symbolValue - num <= nextSymbolValue) {
        // trigger subtraction notation when more than 3 symbols are needed
        num = num - (symbolValue - nextSymbolValue);
        output += newSymbol + romanArray[count][1];
      }
    }
    if ((num < 10 && num > 0) && symbolValue - 1 === num) {
      // trigger special case subtraction notation for single digits
      num = num - symbolValue;
      output += "I" + romanArray[count][1];
    }
  }
  return output;
}


export function getExact(romanArray, num){
  var romanNum = "";
  var numberMap = new Map(romanArray);
  if (numberMap.get(num)) {
    romanNum = numberMap.get(num);
  }
  return romanNum;
}

export function isNumber(input) {
  var isNum = false;
  if( typeof input === "number") {
    isNum = true;
  }
  return isNum;
}

export function convertToInt(input){
  if(!Number.isInteger(input)){
    input = Math.floor(input);
  }
  return input;
}
