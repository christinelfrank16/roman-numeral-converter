////User Interface///

$(document).ready(function(){

  $("form#user-input").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#num").val());

    $("#output").text(convertNumber(numberInput));
  });

});


////Business Logic////

function convertNumber (numberInput){
  var numberArray = [[1, 'I'], [5, 'V'], [10, 'X'], [50, 'L'], [100, 'C'], [500,
  'D'], [1000, 'M']];
  var numberMap = new Map(numberArray.reverse());
  var output = '';
  if (numberInput > 3999){
    alert("Please enter a number less than 3,999");
  } else {
    if (numberMap.get(numberInput)){
      return numberMap.get(numberInput);
    } else {
        var mapEntries = numberMap.entries();
        var count = 0;
        for (var mapItem of mapEntries){
          console.log(numberInput, mapItem [0], mapItem [1], count);
          var symbolValue = mapItem[0];
            if (numberInput-symbolValue>=0){
              while (numberInput - symbolValue >=0){
                output += mapItem[1];
                numberInput -= symbolValue;
              }
            }
           if (count <6){
             var newSymbol = numberArray[count +1][1];
             var nextSymbolValue = numberArray[count +1][0];
             if(nextSymbolValue.toString()[0] === "5") {
               newSymbol = numberArray[count +2][1];
               nextSymbolValue = numberArray[count +2][0];
             }
             console.log(numberInput, newSymbol, nextSymbolValue);
            if(numberInput / nextSymbolValue >3 && symbolValue - numberInput <= nextSymbolValue) {
              numberInput = numberInput - (symbolValue - nextSymbolValue);
              output += newSymbol + mapItem[1];
            }
          }
            if ((numberInput<10 && numberInput>0) && symbolValue - 1 === numberInput) {
              numberInput = numberInput - symbolValue;
              output += "I" + mapItem[1];
        }
        count++;
      }
      return output ;
    }
  }

}
