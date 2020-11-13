'use strict'

function dailyGreeting(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
    
    if(hourNow > 17) {
        greeting = 'Good evening!';
    } else if (hourNow > 11) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!'
    } else {
        greeting = 'Welcome!'
    }
    
    document.write('<h3>' + greeting + '</h3>');
}

// function colorPanda(){
//     let favColor = prompt('What is you favorite color Panda?');
//     let color;
//     let goodColor = ['red', 'black']

//  if(favColor != 'red'){
//     color = 'Boooo';
// } else if (favColor = 'red'){
//     color = 'Yeaaaaa'
// } else color = 'Whaaaaaa'



// document.write('<h4>' + color + '</h4>' )
// }
// //
// //


function colorPanda(){
// let correctAnswer = 'black';
// let correctAnswer1 = 'red';
let color;

let favColor = prompt('What is your favorite color Panda? (red or black)');
while(favColor != 'red'){
    if(favColor === 'black'){
        break;
    }
    favColor = prompt('Try again! (red or black)');
    }
    if(favColor === 'black'){
        color = 'Boooo';
    } else if(favColor === 'red'){
        color = 'Yeaaaaaa'
}

document.write('<h4>' + color + '</h4>')
}

//
//
function clickButton(){
    let message;
    let x = confirm('click ok');
    if (x == true) {
        message = 'Good job!';
    } else {
        message = "You can't follow directions, can you?"
    }
    document.getElementById("plswork").innerHTML = message;
    }

function twentyTwenty(){
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
    }

// dailyGreeting(); 
// colorPanda(); 
// twentyTwenty();

function rateThis(){
    let userAnswer = prompt('Rate Red Pandas on a scale of 1 to 5');
    if(userAnswer > 0 && userAnswer <= 5){
        for(let i = 0; i < userAnswer; i++){
            document.write('<img src="https://scx1.b-cdn.net/csz/news/800/2020/redpandasmay.jpg">');
        }
    } else{
        alert('Invalid answer')
    }
}

rateThis();

// function rateThis(){
//     let userAnswer = prompt('Rate Red Pandas on a scale of 1 to 5');
//     if(userAnswer > 0 && userAnswer <= 5){
//         enjoyPhoto();
//     } else {
//         alert('Invalid Answer')
//     }
// }

// function enjoyPhoto(){
//     for (let i = 0; i < userAnswer; i++){
//         document.write('<img src="https://scx1.b-cdn.net/csz/news/800/2020/redpandasmay.jpg">');
//     }
// }

// rateThis();
   
