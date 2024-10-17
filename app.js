let number = prompt("Enter your number: ");
number = parseInt(number);

if (number > 100 || number < 0) {
  document.write(`<h1>${number} is Invalid Number</h1>`);
} else if (number >= 90 && number <= 100) {
  document.write(`<h1> ${number} is passing number and grade is A+ </h1>`);
} else if (number >= 80 && number < 90) {
  document.write(` <h1>${number} is passing number and grade is B+ </h1>`);
} else if (number >= 70 && number < 80) {
  document.write(` <h1>${number} is passing number and grade is B </h1>`);
} else if (number >= 60 && number < 70) {
  document.write(` <h1>${number} is passing number and grade is C </h1>`);
} else if (number >= 50 && number < 60) {
  document.write(`<h1>${number} is passing number and grade is C+ </h1>`);
} else if (number >= 33 && number < 50) {
  document.write(` <h1>${number} is passing number and grade is D </h1>`);
} else {
  document.write(`<h1>${number} is Failed F </h1>`);
}
