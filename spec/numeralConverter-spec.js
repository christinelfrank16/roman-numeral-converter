import { isNumber, convertNumber, convertToInt } from '../src/NumberConverter.js';

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

  it('should test whether input is more than 3,999', function() {
    var input = 4000;
    expect(convertNumber(input)).toEqual("Please enter a number less than 3,999");
  });

  it('should test whether input is more than 3,999', function() {
    var input = 3500;
    expect(convertNumber(input)).not.toEqual("Please enter a number less than 3,999");
  });

  it('should convert non-integer numbers to integers', function() {
    var input = 35.5;
    expect(Number.isInteger(convertToInt(input))).toEqual(true);
  });


});
