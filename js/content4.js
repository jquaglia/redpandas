'use strict'

let year = new Date();
let yearNow = year.getFullYear();
let saying;

if (yearNow > 2020) {
    saying = 'Thank God its over';
} else if (yearNow < 2020) {
    saying = 'Woah.. a time traveler';
} else if (yearNow = 2020) {
    saying = 'Is 2020 over yet?!';
} else {
    saying = 'Red Pandas Rule!';
}
document.write('<h4>' + saying + '</h4>');