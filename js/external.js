console.log('hello from external');
alert('Welcome to my website');
var userAnswer = prompt('What is your favorite color?');
alert(userAnswer);
var userQuestion = prompt('What is your favorite number?');
alert(userQuestion);

var pricePerDay = 3;
var userDaysRentedLM = prompt('How many days did you rent Little Mermaid?');
console.log(userDaysRentedLM);
var userDaysRentedBB = prompt('How many days did you rent Brother Bear?');
console.log(userDaysRentedBB);
var userDaysRentedH = prompt('How many days did you rent Hercules?');
console.log(userDaysRentedH);
var total = (userDaysRentedLM * pricePerDay) + (userDaysRentedBB * pricePerDay) + (userDaysRentedH * pricePerDay);
alert(total);