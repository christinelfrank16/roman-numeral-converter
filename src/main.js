import $ from 'jquery';
import 'bootstrap';
import { NumberConverter } from './NumberConverter.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

////User Interface///

$(document).ready(function() {

  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#num").val());

    $("#output").text(NumberConverter.convertNumber(numberInput));
  });

});


////Business Logic////
