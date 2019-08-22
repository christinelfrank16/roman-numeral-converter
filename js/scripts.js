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
  if (numberInput > 3,999){
    alert("Please enter a number less than 3,999");
  } else {
    return numberInput ;
  }
  
}
