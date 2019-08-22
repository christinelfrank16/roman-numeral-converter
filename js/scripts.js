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
      for (var i=numberInput; i>0; i){
        for (var mapItem of numberMap.entries()){
          var symbolValue = mapItem[0];
          console.log(numberInput);
          console.log(symbolValue);
            if (numberInput-symbolValue>=0){
              console.log(symbolValue);
              while (numberInput - symbolValue >=0){
                output += mapItem[1];
                numberInput -= symbolValue;
              }
            }
            if ((numberInput<10 && numberInput>0) && symbolValue - 1 === numberInput) {
              numberInput = numberInput - symbolValue;
              output += "I" + mapItem[1];
            } else{
              if()
            }
        }
        i=0;
      }
      return output ;
    }
  }

}
