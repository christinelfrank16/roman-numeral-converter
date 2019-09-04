import { isNumber, convertNumber } from '../src/NumberConverter.js';

describe('input-validation', function() {

  it('should test whether input is numeric', function() {
    var input = "350";
    expect(isNumber(input)).toEqual(false);
  });

  it('should test whether input is numeric', function() {
    var input = 350;
    expect(isNumber(input)).toEqual(true);
  });

  it('should test whether input is numeric', function() {
    var input = 35.5;
    expect(isNumber(input)).toEqual(true);
  });

  it('should test whether input is less than or equal to 3,999', function() {
    var input = 4000;
    expect(convertNumber(input)).toEqual("Please enter a number less than 3,999");
  });



});
